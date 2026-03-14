// A compiled, expanded dataset representing all 10 IPL active franchises

export const teams = [
  { 
    id: 'CSK', name: 'Chennai Super Kings', color: '#FFFF3C',
    stats: { titles: 5, winRatio: 58.96, bestEra: '2010 - 2011, 2018 - 2023', totalMatches: 225 },
    legends: [
      { name: 'MS Dhoni', role: 'WK Batter / Capt', years: '2008-Present', matches: 250, keyStat: '4700+ runs & 140+ dismissals' },
      { name: 'Suresh Raina', role: 'Top-order Batter', years: '2008-2021', matches: 200, keyStat: '5528 runs (Mr. IPL)' },
      { name: 'Ravindra Jadeja', role: 'All-Rounder', years: '2012-Present', matches: 172, keyStat: '130+ wickets & 1800+ runs' }
    ]
  },
  { 
    id: 'MI', name: 'Mumbai Indians', color: '#004BA0',
    stats: { titles: 5, winRatio: 56.40, bestEra: '2013 - 2020', totalMatches: 247 },
    legends: [
      { name: 'Rohit Sharma', role: 'Opening Batter', years: '2011-Present', matches: 198, keyStat: '5000+ runs for MI' },
      { name: 'Lasith Malinga', role: 'Fast Bowler', years: '2009-2019', matches: 122, keyStat: '170 wickets @ 19.80' },
      { name: 'Kieron Pollard', role: 'All-Rounder', years: '2010-2022', matches: 189, keyStat: '3412 runs & 69 wickets' }
    ]
  },
  { 
    id: 'RCB', name: 'Royal Challengers Bangalore', color: '#EC1C24',
    stats: { titles: 0, winRatio: 48.06, bestEra: '2009, 2011, 2016', totalMatches: 241 },
    legends: [
      { name: 'Virat Kohli', role: 'Top-order Batter', years: '2008-Present', matches: 237, keyStat: '7263 runs (Highest ever)' },
      { name: 'AB de Villiers', role: 'Middle-order Batter', years: '2011-2021', matches: 156, keyStat: '4491 runs @ SR 158.63' },
      { name: 'Chris Gayle', role: 'Opening Batter', years: '2011-2017', matches: 85, keyStat: '3163 runs & 5 centuries' }
    ]
  },
  { 
    id: 'KKR', name: 'Kolkata Knight Riders', color: '#2E0854',
    stats: { titles: 2, winRatio: 51.56, bestEra: '2012 - 2014', totalMatches: 236 },
    legends: [
      { name: 'Gautam Gambhir', role: 'Top-order Batter', years: '2011-2017', matches: 108, keyStat: '3035 runs & 2 Titles' },
      { name: 'Sunil Narine', role: 'All-Rounder', years: '2012-Present', matches: 162, keyStat: '163 wkts @ 6.73 eco' },
      { name: 'Andre Russell', role: 'All-Rounder', years: '2014-Present', matches: 105, keyStat: '2262 runs @ SR 174' }
    ]
  },
  { 
    id: 'DC', name: 'Delhi Capitals', color: '#00008B',
    stats: { titles: 0, winRatio: 45.17, bestEra: '2019 - 2021', totalMatches: 238 },
    legends: [
      { name: 'Virender Sehwag', role: 'Opening Batter', years: '2008-2013', matches: 79, keyStat: '2174 runs @ SR 160.32' },
      { name: 'Rishabh Pant', role: 'WK Batter / Capt', years: '2016-Present', matches: 98, keyStat: '2838 runs @ SR 147.97' },
      { name: 'Amit Mishra', role: 'Leg Spinner', years: '2008-2021', matches: 103, keyStat: '106 wickets (Multiple Hat-tricks)' }
    ]
  },
  { 
    id: 'RR', name: 'Rajasthan Royals', color: '#EA1EA8',
    stats: { titles: 1, winRatio: 50.48, bestEra: '2008 (Inaugural)', totalMatches: 206 },
    legends: [
      { name: 'Shane Warne', role: 'Leg Spinner / Capt', years: '2008-2011', matches: 55, keyStat: '57 wickets & 2008 Title' },
      { name: 'Shane Watson', role: 'All-Rounder', years: '2008-2015', matches: 78, keyStat: '2372 runs & 61 wickets' },
      { name: 'Sanju Samson', role: 'WK Batter / Capt', years: '2013-Present', matches: 120, keyStat: '3211 runs for RR' }
    ]
  },
  { 
    id: 'SRH', name: 'Sunrisers Hyderabad', color: '#FF822A',
    stats: { titles: 1, winRatio: 48.70, bestEra: '2016 - 2018', totalMatches: 166 },
    legends: [
      { name: 'David Warner', role: 'Opening Batter', years: '2014-2021', matches: 95, keyStat: '4014 runs & 2016 Trophy' },
      { name: 'Bhuvneshwar K.', role: 'Fast Bowler', years: '2014-Present', matches: 130, keyStat: '146 wkts (Two Purple Caps)' },
      { name: 'Rashid Khan', role: 'Leg Spinner', years: '2017-2021', matches: 76, keyStat: '93 wickets @ 6.33 economy' }
    ]
  },
  { 
    id: 'PBKS', name: 'Punjab Kings', color: '#ED1B24',
    stats: { titles: 0, winRatio: 45.69, bestEra: '2014', totalMatches: 232 },
    legends: [
      { name: 'KL Rahul', role: 'Opening Batter / Capt', years: '2018-2021', matches: 55, keyStat: '2548 runs (Avg 56.6)' },
      { name: 'Shaun Marsh', role: 'Top-order Batter', years: '2008-2017', matches: 71, keyStat: '2477 runs (First Orange Cap)' },
      { name: 'Piyush Chawla', role: 'Leg Spinner', years: '2008-2013', matches: 87, keyStat: '84 wickets for Punjab' }
    ]
  },
  { 
    id: 'GT', name: 'Gujarat Titans', color: '#1B2133',
    stats: { titles: 1, winRatio: 65.62, bestEra: '2022 - Present', totalMatches: 33 },
    legends: [
      { name: 'Hardik Pandya', role: 'All-Rounder / Capt', years: '2022-2023', matches: 31, keyStat: '833 runs & 11 wkts (2022 Title)' },
      { name: 'Rashid Khan', role: 'Leg Spinner', years: '2022-Present', matches: 33, keyStat: '46 wickets @ 7.42 eco' },
      { name: 'Shubman Gill', role: 'Opening Batter', years: '2022-Present', matches: 33, keyStat: '1373 runs (890 in 2023)' }
    ]
  },
  { 
    id: 'LSG', name: 'Lucknow Super Giants', color: '#03C4FF',
    stats: { titles: 0, winRatio: 54.83, bestEra: '2022 - Present', totalMatches: 30 },
    legends: [
      { name: 'KL Rahul', role: 'Opening Batter / Capt', years: '2022-Present', matches: 24, keyStat: '890 runs @ SR 125' },
      { name: 'Marcus Stoinis', role: 'All-Rounder', years: '2022-Present', matches: 30, keyStat: '564 runs & 9 wkts' },
      { name: 'Ravi Bishnoi', role: 'Leg Spinner', years: '2022-Present', matches: 29, keyStat: '29 wickets @ 8.07 eco' }
    ]
  }
];

export const venues = [
  { id: 'chepauk', name: 'M.A. Chidambaram Stadium, Chennai', pitchType: 'Spin-friendly', paceVsSpin: { pace: 35, spin: 65 }, avgFirstInnings: 155 },
  { id: 'wankhede', name: 'Wankhede Stadium, Mumbai', pitchType: 'Batting / Pace-friendly', paceVsSpin: { pace: 70, spin: 30 }, avgFirstInnings: 185 },
  { id: 'chinnaswamy', name: 'M. Chinnaswamy Stadium, Bangalore', pitchType: 'Batting Paradise', paceVsSpin: { pace: 60, spin: 40 }, avgFirstInnings: 195 },
  { id: 'eden', name: 'Eden Gardens, Kolkata', pitchType: 'Balanced', paceVsSpin: { pace: 50, spin: 50 }, avgFirstInnings: 170 },
  { id: 'ahmedabad', name: 'Narendra Modi Stadium, Ahmedabad', pitchType: 'Poced / Balanced', paceVsSpin: { pace: 65, spin: 35 }, avgFirstInnings: 188 },
  { id: 'hyderabad', name: 'Rajiv Gandhi Int. Stadium, Hyderabad', pitchType: 'Flat', paceVsSpin: { pace: 65, spin: 35 }, avgFirstInnings: 175 },
  { id: 'lucknow', name: 'Ekana Cricket Stadium, Lucknow', pitchType: 'Sluggish / Spin-friendly', paceVsSpin: { pace: 40, spin: 60 }, avgFirstInnings: 145 },
  { id: 'mohali', name: 'IS Bindra Stadium, Mohali', pitchType: 'Pace / Bounce', paceVsSpin: { pace: 75, spin: 25 }, avgFirstInnings: 180 },
  { id: 'delhi', name: 'Arun Jaitley Stadium, Delhi', pitchType: 'Slow / Low Bounce', paceVsSpin: { pace: 50, spin: 50 }, avgFirstInnings: 165 },
  { id: 'jaipur', name: 'Sawai Mansingh Stadium, Jaipur', pitchType: 'Balanced / Deep Boundaries', paceVsSpin: { pace: 55, spin: 45 }, avgFirstInnings: 160 }
];

// Fallback utility for historical probability.
// Realistically, compiling an exact 10x10 matrix across 10 venues in mock data is massive.
// Instead of a static hardcoded array for everything, we use a dynamic weighted approach 
// ensuring a percentage is generated if missing from the explicit matrix, based on the franchise's all-time win ratio.
export const calculateWinProbability = (teamA_id, teamB_id, venue_id) => {
  const teamA = teams.find(t => t.id === teamA_id);
  const teamB = teams.find(t => t.id === teamB_id);
  
  // Baseline probabilities based on lifetime win ratios
  const baseProbA = teamA.stats.winRatio / (teamA.stats.winRatio + teamB.stats.winRatio);
  const baseProbB = 1 - baseProbA;

  // Simulate a home advantage factor if the venue name matches the team's home city (simplified heuristic)
  const venueData = venues.find(v => v.id === venue_id);
  let advantageA = 0;
  let advantageB = 0;

  if (venueData.name.toLowerCase().includes(teamA.name.split(' ').pop().toLowerCase())) advantageA = 0.15;
  if (venueData.name.toLowerCase().includes(teamB.name.split(' ').pop().toLowerCase())) advantageB = 0.15;

  let finalProbA = baseProbA + advantageA - advantageB;
  
  // Clamp
  if (finalProbA < 0.1) finalProbA = 0.1;
  if (finalProbA > 0.9) finalProbA = 0.9;

  return finalProbA;
};
