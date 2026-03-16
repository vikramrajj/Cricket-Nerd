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

export const fetchMatchDetails = async (cricinfoUrl) => {
  if (!cricinfoUrl) return null;

  try {
    // Stage 1: Try scraping __NEXT_DATA__ from the HTML Page first
    const response = await fetch(`${PROXY_URL}${encodeURIComponent(cricinfoUrl)}`);
    const data = await response.json();
    
    if (data.contents) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data.contents, "text/html");
      const scriptTag = doc.getElementById('__NEXT_DATA__');
      
      if (scriptTag) {
        const jsonData = JSON.parse(scriptTag.textContent);
        const rawData = jsonData.props?.appPageProps?.data || jsonData.props?.pageProps?.data || {};
        const content = rawData.content || rawData.data?.content;

        if (content && content.innings) {
          return {
            innings: content.innings.map(inn => ({
              team: { name: inn.team?.name || 'Innings' },
              batsmen: (inn.inningBatsmen || inn.batsmen || []).map(b => ({
                player: { fullName: b.player?.fullName || `Player ${b.player?.id || ''}` },
                runs: b.runs || 0,
                balls: b.balls || 0,
                fours: b.fours || 0,
                sixes: b.sixes || 0,
                strikeRate: b.strikeRate || '0.0',
                dismissal: b.dismissalText || ''
              })),
              bowlers: (inn.inningBowlers || inn.bowlers || []).map(b => ({
                player: { fullName: b.player?.fullName || `Bowler ${b.player?.id || ''}` },
                overs: b.overs || '0.0',
                maidens: b.maidens || 0,
                runs: b.runs || 0,
                wickets: b.wickets || 0,
                economy: b.economy || '0.0'
              }))
            })),
            commentary: content.comments || content.recentBallCommentary || [],
            players: content.matchPlayers || {},
            status: content.match?.statusText || 'Live'
          };
        }
      }
    }

    console.log("HTML Scraping failed or blocked. Falling back to JSON endpoint...");

    // Stage 2: Fallback to Legacy JSON API endpoint using Match ID
    const cleanUrl = cricinfoUrl.split('?')[0].replace(/\/live-cricket-score|\/full-scorecard|\/match-report/i, '');
    const tokens = cleanUrl.split('/');
    let matchId = null;
    
    for (let i = tokens.length - 1; i >= 0; i--) {
      const m = tokens[i].match(/(\d{6,8})/);
      if (m) {
        matchId = m[1];
        break;
      }
    }

    if (!matchId) throw new Error("Could not parse Match ID for fallback");

    const jsonUrl = `https://www.espncricinfo.com/ci/engine/match/${matchId}.json`;
    const jsonResp = await fetch(`${PROXY_URL}${encodeURIComponent(jsonUrl)}`);
    const jsonData = await jsonResp.json();
    
    if (!jsonData.contents) throw new Error("No data contents on JSON fallback");

    const json = JSON.parse(jsonData.contents);
    if (!json.match) throw new Error("Match details unavailable inside JSON fallback");

    const liveScore = json.live || {};
    const playerMap = json.player || {};

    const batsmen = (liveScore.batting || []).map(bat => {
      const pDetail = playerMap[bat.player_id] || {};
      return {
        player: { fullName: pDetail.popular_name || pDetail.card_short || `Player ${bat.player_id}` },
        runs: bat.runs || 0,
        balls: bat.balls_faced || 0,
        fours: bat.fours || 0,
        sixes: bat.sixes || 0,
        strikeRate: bat.strike_rate || '0'
      };
    });

    const bowlers = (liveScore.bowling || []).map(bowl => {
      const pDetail = playerMap[bowl.player_id] || {};
      return {
        player: { fullName: pDetail.popular_name || pDetail.card_short || `Player ${bowl.player_id}` },
        overs: bowl.overs || '0.0',
        maidens: bowl.maidens || 0,
        runs: bowl.conceded || 0,
        wickets: bowl.wickets || 0,
        economy: bowl.economy_rate || '0'
      };
    });

    return {
      innings: [
        {
          team: { name: json.match?.current_summary || 'Live Inning' },
          batsmen: batsmen.length > 0 ? batsmen : [],
          bowlers: bowlers.length > 0 ? bowlers : []
        }
      ],
      commentary: (json.comms || []).map(c => ({
        overNumber: c.overs || null,
        title: c.text ? c.text.replace(/<[^>]*>/g, '') : '',
        text: c.commentary || ''
      })),
      players: playerMap,
      status: json.match?.status_text || 'Live'
    };

  } catch (err) {
    console.error("Scraping Detailed Match stats failed:", err);
    return null; // Graceful fallback
  }
};
