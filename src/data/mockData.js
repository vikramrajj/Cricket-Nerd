export const mockMatches = [
  {
    id: 'm1',
    status: 'Live',
    format: 'Test',
    team1: { name: 'IND', score: '342/6' },
    team2: { name: 'AUS', score: '280' },
    currentDetails: 'IND lead by 62 runs. Day 3, Session 2.',
    batsmen: [
      { name: 'V. Kohli', runs: 85, balls: 140 },
      { name: 'R. Jadeja', runs: 22, balls: 35 }
    ],
    bowlers: [
      { name: 'P. Cummins', overs: 24, runs: 65, wickets: 3 }
    ]
  },
  {
    id: 'm2',
    status: 'Innings Break',
    format: 'T20',
    team1: { name: 'ENG', score: '185/5' },
    team2: { name: 'WI', score: '' },
    currentDetails: 'WI need 186 runs to win from 20 overs.',
    batsmen: [],
    bowlers: []
  },
  {
    id: 'm3',
    status: 'Live',
    format: 'ODI',
    team1: { name: 'SA', score: '210/4' },
    team2: { name: 'NZ', score: '' },
    currentDetails: 'SA 210/4 in 35.2 overs.',
    batsmen: [
      { name: 'H. Klaasen', runs: 70, balls: 45 },
      { name: 'D. Miller', runs: 40, balls: 30 }
    ],
    bowlers: [
      { name: 'T. Boult', overs: 7, runs: 40, wickets: 2 }
    ]
  }
];

export const mockNews = [
  {
    id: 'n1',
    title: 'The Evolution of T20 Cricket',
    summary: 'How the shortest format of the game has transformed batting strike rates over the last decade.',
    category: 'Analysis',
    time: '2 hours ago',
    image: 'https://images.unsplash.com/photo-1593341646782-e0be9cefb3f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'n2',
    title: 'Pace vs Spin: The Ultimate Showdown',
    summary: 'A deep dive into the historical success rates of fast bowlers versus spinners on sub-continent pitches.',
    category: 'Stats',
    time: '4 hours ago',
    image: 'https://images.unsplash.com/photo-1507502707541-f369a3b18502?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'n3',
    title: 'Women\'s Premier League Expansion',
    summary: 'Two new franchises set to join the WPL next season, bringing more talent to the global stage.',
    category: 'News',
    time: '6 hours ago',
    image: 'https://images.unsplash.com/photo-1624194532959-1e18d05dd362?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'n4',
    title: 'Classic Match Rewind: 1999 World Cup Semi-Final',
    summary: 'Reliving the drama of the tied match between Australia and South Africa that defined an era.',
    category: 'History',
    time: '12 hours ago',
    image: 'https://images.unsplash.com/photo-1618774775443-4e861a342468?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];
