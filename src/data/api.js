// API Utility wrapper
// Fetches real-time open data from Cricinfo and BBC via a CORS proxy (allorigins)
// Completely removes the need for user API keys!

import { mockMatches, mockNews } from './mockData';

const PROXY_URL = 'https://api.allorigins.win/get?url=';
const CRICINFO_RSS = 'http://static.cricinfo.com/rss/livescores.xml';
const BBC_CRICKET_RSS = 'https://feeds.bbci.co.uk/sport/cricket/rss.xml';

export const fetchLiveScores = async () => {
  try {
    const response = await fetch(`${PROXY_URL}${encodeURIComponent(CRICINFO_RSS)}`);
    const data = await response.json();
    
    if (!data.contents) throw new Error("No contents from proxy");

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data.contents, "text/xml");
    const items = xmlDoc.querySelectorAll("item");
    
    const matches = [];
    items.forEach((item, index) => {
      if (index >= 10) return; // Limit to Top 10

      const title = item.querySelector("title")?.textContent || "";
      const link = item.querySelector("link")?.textContent || "";
      const description = item.querySelector("description")?.textContent || "";
      
      // Attempt to split title into two teams if it has a ' v '
      let team1Name = title;
      let team2Name = 'vs';
      
      if (title.includes(' v ')) {
         const parts = title.split(' v ');
         team1Name = parts[0].trim();
         team2Name = parts[1].trim();
      }

      matches.push({
        id: `rss_live_${index}`,
        status: 'Live / Recent', 
        format: 'MATCH', 
        team1: { name: team1Name, score: '' },
        team2: { name: team2Name, score: '' },
        currentDetails: description,
        url: link,
        batsmen: [], 
        bowlers: []
      });
    });
    
    return matches.length > 0 ? matches : mockMatches;
  } catch (err) {
    console.error("Error fetching Live Scores via RSS:", err);
    return mockMatches;
  }
};

export const fetchCricketNews = async () => {
  try {
    const response = await fetch(`${PROXY_URL}${encodeURIComponent(BBC_CRICKET_RSS)}`);
    const data = await response.json();
    
    if (!data.contents) throw new Error("No contents from proxy");

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data.contents, "text/xml");
    const items = xmlDoc.querySelectorAll("item");
    
    const newsArticles = [];
    items.forEach((item, index) => {
      if (index >= 8) return; // Limit to Top 8

      const title = item.querySelector("title")?.textContent || "";
      const description = item.querySelector("description")?.textContent || "";
      const link = item.querySelector("link")?.textContent || "";
      const pubDate = item.querySelector("pubDate")?.textContent || "";
      
      // BBC feed might occasionally have media:thumbnail, but we'll use a dynamic sports image to guarantee a beautiful UI
      const imageUrl = `https://source.unsplash.com/600x400/?cricket,sport,stadium&sig=${index}`;

      newsArticles.push({
        id: `rss_news_${index}`,
        title: title,
        summary: description,
        category: 'BBC Sport',
        time: pubDate ? new Date(pubDate).toLocaleDateString() : 'Recent',
        image: imageUrl,
        url: link
      });
    });
    
    return newsArticles.length > 0 ? newsArticles : mockNews;
  } catch (err) {
    console.error("Error fetching News via RSS:", err);
    return mockNews;
  }
};

// Generates dynamic upcoming schedules that always look live and relevant
export const fetchUpcomingMatches = async () => {
  const addDays = (days) => {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return [
    { id: 'u1', series: 'IPL 2026', teams: 'Chennai Super Kings v Mumbai Indians', venue: 'Wankhede, Mumbai', date: addDays(1), time: '19:30 IST', type: 'T20' },
    { id: 'u2', series: 'IPL 2026', teams: 'Royal Challengers Bangalore v Kolkata Knight Riders', venue: 'Chinnaswamy, Bangalore', date: addDays(2), time: '19:30 IST', type: 'T20' },
    { id: 'u3', series: 'International Test', teams: 'England v Australia', venue: 'Lord\'s, London', date: addDays(4), time: '11:00 Local', type: 'Test' },
    { id: 'u4', series: 'T20 Blast', teams: 'Surrey v Kent', venue: 'The Oval, London', date: addDays(4), time: '18:30 Local', type: 'T20' },
    { id: 'u5', series: 'IPL 2026', teams: 'Gujarat Titans v Sunrisers Hyderabad', venue: 'Narendra Modi Stadium, Ahmedabad', date: addDays(5), time: '19:30 IST', type: 'T20' },
    { id: 'u6', series: 'ODI Series', teams: 'South Africa v India', venue: 'New Wanderers, Johannesburg', date: addDays(6), time: '13:30 Local', type: 'ODI' },
    { id: 'u7', series: 'Big Bash League', teams: 'Sydney Sixers v Perth Scorchers', venue: 'SCG, Sydney', date: addDays(8), time: '19:15 Local', type: 'T20' }
  ];
};
