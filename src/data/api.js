// API Utility wrapper
// Falls back to mock data if no key is provided.

import { mockMatches, mockNews } from './mockData';

const CRICAPI_BASE_URL = 'https://api.cricapi.com/v1';
const NEWSAPI_BASE_URL = 'https://newsapi.org/v2';

export const fetchLiveScores = async () => {
  const apiKey = localStorage.getItem('cricApiKey');
  
  if (!apiKey) {
    console.log("No CricAPI key found. Using mock data.");
    return mockMatches;
  }

  try {
    const response = await fetch(`${CRICAPI_BASE_URL}/currentMatches?apikey=${apiKey}&offset=0`);
    const data = await response.json();
    
    if (data.status !== "success") throw new Error(data.reason || "Failed to fetch");
    
    // Transform real data to match our mock structure
    return data.data.slice(0, 10).map(match => ({
      id: match.id,
      status: match.matchStarted ? (match.matchEnded ? 'Ended' : 'Live') : 'Upcoming',
      format: match.matchType.toUpperCase(),
      team1: { name: match.teams[0], score: match.score?.[0]?.r ? `${match.score[0].r}/${match.score[0].w || 0}` : '' },
      team2: { name: match.teams[1], score: match.score?.[1]?.r ? `${match.score[1].r}/${match.score[1].w || 0}` : '' },
      currentDetails: match.status,
      batsmen: [], // Standard endpoint doesn't usually provide deep scorecard without secondary call
      bowlers: []
    }));
  } catch (err) {
    console.error("Error fetching Live Scores:", err);
    return mockMatches;
  }
};

export const fetchCricketNews = async () => {
  const apiKey = localStorage.getItem('newsApiKey');
  
  if (!apiKey) {
    console.log("No NewsAPI key found. Using mock data.");
    return mockNews;
  }

  try {
    const response = await fetch(`${NEWSAPI_BASE_URL}/everything?q=cricket&sortBy=publishedAt&language=en&apiKey=${apiKey}`);
    const data = await response.json();
    
    if (data.status !== "ok") throw new Error(data.message || "Failed to fetch news");

    // Transform NewsAPI format to our structure
    return data.articles.slice(0, 8).map((article, index) => ({
      id: `real_n_${index}`,
      title: article.title,
      summary: article.description || 'Click to read more...',
      category: article.source.name,
      time: new Date(article.publishedAt).toLocaleDateString(),
      image: article.urlToImage || 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      url: article.url
    }));
  } catch (err) {
    console.error("Error fetching News:", err);
    return mockNews;
  }
};
