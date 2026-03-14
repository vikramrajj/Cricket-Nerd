// A compiled, simplified dataset representing IPL historical metrics (Mocked based on real historic trends)

export const teams = [
  { id: 'CSK', name: 'Chennai Super Kings', color: '#FFFF3C' },
  { id: 'MI', name: 'Mumbai Indians', color: '#004BA0' },
  { id: 'RCB', name: 'Royal Challengers Bangalore', color: '#EC1C24' },
  { id: 'KKR', name: 'Kolkata Knight Riders', color: '#2E0854' },
  { id: 'DC', name: 'Delhi Capitals', color: '#00008B' },
  { id: 'RR', name: 'Rajasthan Royals', color: '#EA1EA8' },
];

export const venues = [
  { 
    id: 'chepauk', 
    name: 'M.A. Chidambaram Stadium, Chennai', 
    pitchType: 'Spin-friendly', 
    paceVsSpin: { pace: 35, spin: 65 }, // % of wickets
    avgFirstInnings: 155
  },
  { 
    id: 'wankhede', 
    name: 'Wankhede Stadium, Mumbai', 
    pitchType: 'Batting / Pace-friendly', 
    paceVsSpin: { pace: 70, spin: 30 },
    avgFirstInnings: 185
  },
  { 
    id: 'chinnaswamy', 
    name: 'M. Chinnaswamy Stadium, Bangalore', 
    pitchType: 'Batting Paradise', 
    paceVsSpin: { pace: 60, spin: 40 },
    avgFirstInnings: 195
  },
  { 
    id: 'eden', 
    name: 'Eden Gardens, Kolkata', 
    pitchType: 'Balanced', 
    paceVsSpin: { pace: 50, spin: 50 },
    avgFirstInnings: 170
  }
];

// Mock historical H2H win probabilities (Team 1 Win % vs Team 2 depending on Venue)
// Structure: [teamA_id][teamB_id][venue_id] = teamA_win_probability (0 to 1)
export const historicalH2H = {
  CSK: {
    MI: { chepauk: 0.45, wankhede: 0.35, chinnaswamy: 0.50, eden: 0.50 },
    RCB: { chepauk: 0.80, wankhede: 0.60, chinnaswamy: 0.55, eden: 0.65 },
    KKR: { chepauk: 0.70, wankhede: 0.55, chinnaswamy: 0.60, eden: 0.40 },
  },
  MI: {
    CSK: { chepauk: 0.55, wankhede: 0.65, chinnaswamy: 0.50, eden: 0.50 },
    RCB: { chepauk: 0.60, wankhede: 0.75, chinnaswamy: 0.65, eden: 0.60 },
    KKR: { chepauk: 0.65, wankhede: 0.85, chinnaswamy: 0.70, eden: 0.75 },
  },
  RCB: {
    CSK: { chepauk: 0.20, wankhede: 0.40, chinnaswamy: 0.45, eden: 0.35 },
    MI: { chepauk: 0.40, wankhede: 0.25, chinnaswamy: 0.35, eden: 0.40 },
    KKR: { chepauk: 0.45, wankhede: 0.50, chinnaswamy: 0.60, eden: 0.45 },
  },
  KKR: {
    CSK: { chepauk: 0.30, wankhede: 0.45, chinnaswamy: 0.40, eden: 0.60 },
    MI: { chepauk: 0.35, wankhede: 0.15, chinnaswamy: 0.30, eden: 0.25 },
    RCB: { chepauk: 0.55, wankhede: 0.50, chinnaswamy: 0.40, eden: 0.55 },
  }
};
