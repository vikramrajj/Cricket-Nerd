import React, { useState, useEffect } from 'react';
import './LiveNewsPage.css';
import { fetchLiveScores, fetchCricketNews, fetchUpcomingMatches, fetchMatchDetails } from '../data/api';
import { Radio, Rss, RefreshCw, Calendar, Clock, MapPin, X, Users, MessageSquare, Clipboard } from 'lucide-react';

const MatchCard = ({ match, onClick }) => (
  <div className="match-card" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onClick={onClick} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
    <div className="match-status">{match.status} • {match.format}</div>
    
    <div className="match-teams">
      <div className="team-row">
        <span className="team-name">{match.team1.name}</span>
        <span className="team-score">{match.team1.score}</span>
      </div>
      <div className="team-row">
        <span className="team-name">{match.team2.name}</span>
        <span className="team-score">{match.team2.score}</span>
      </div>
    </div>
    
    <div className="match-details" style={{ height: '40px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
      {match.currentDetails}
    </div>
  </div>
);

// Rich Overlay Match Center Modal
const MatchCenterModal = ({ match, data, onClose }) => {
  const [activeTab, setActiveTab] = useState('scorecard');

  useEffect(() => {
    // Disable body scroll when modal open
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  const renderScorecard = () => {
    if (!data || !data.innings || data.innings.length === 0 || !data.innings[0].batsmen || data.innings[0].batsmen.length === 0) {
      const desc = match.currentDetails || "";
      const details = desc.split(/[;|\n|\.]/); // split onto rows on reasonable delimiters
      
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>Match Updates (Fallback)</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {details.filter(d => d.trim().length > 3).map((line, idx) => (
                <div key={idx} style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', color: '#fff', fontSize: '0.95rem' }}>
                  {line.trim()}
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            <p style={{ margin: 0 }}>Detailed Scorecard tables currently hitting CORS request limits from provider.</p>
            <a href={match.url} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-gold)', textDecoration: 'underline', marginTop: '0.5rem', display: 'inline-block' }}>
              View full live card on ESPN
            </a>
          </div>
        </div>
      );
    }
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {data.innings.map((inn, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
              {inn.team?.name || 'Innings'} Scorecard
            </h3>
            
            {/* Batsmen Table */}
            <h4 style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Batting</h4>
            <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', color: '#fff' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-secondary)' }}>
                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Batsman</th>
                    <th style={{ textAlign: 'right', padding: '0.5rem' }}>R</th>
                    <th style={{ textAlign: 'right', padding: '0.5rem' }}>B</th>
                    <th style={{ textAlign: 'right', padding: '0.5rem' }}>4s</th>
                    <th style={{ textAlign: 'right', padding: '0.5rem' }}>6s</th>
                    <th style={{ textAlign: 'right', padding: '0.5rem' }}>SR</th>
                  </tr>
                </thead>
                <tbody>
                  {(inn.batsmen || []).map((bat, bIdx) => (
                    <tr key={bIdx} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                      <td style={{ padding: '0.5rem', fontWeight: 'bold' }}>{bat.player?.fullName}</td>
                      <td style={{ padding: '0.5rem', textAlign: 'right' }}>{bat.runs}</td>
                      <td style={{ padding: '0.5rem', textAlign: 'right' }}>{bat.balls}</td>
                      <td style={{ padding: '0.5rem', textAlign: 'right' }}>{bat.fours}</td>
                      <td style={{ padding: '0.5rem', textAlign: 'right' }}>{bat.sixes}</td>
                      <td style={{ padding: '0.5rem', textAlign: 'right' }}>{bat.strikeRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bowlers Table */}
            <h4 style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Bowling</h4>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', color: '#fff' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-secondary)' }}>
                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Bowler</th>
                    <th style={{ textAlign: 'right', padding: '0.5rem' }}>O</th>
                    <th style={{ textAlign: 'right', padding: '0.5rem' }}>M</th>
                    <th style={{ textAlign: 'right', padding: '0.5rem' }}>R</th>
                    <th style={{ textAlign: 'right', padding: '0.5rem' }}>W</th>
                    <th style={{ textAlign: 'right', padding: '0.5rem' }}>Eco</th>
                  </tr>
                </thead>
                <tbody>
                  {(inn.bowlers || []).map((bowl, bIdx) => (
                    <tr key={bIdx} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                      <td style={{ padding: '0.5rem', fontWeight: 'bold' }}>{bowl.player?.fullName}</td>
                      <td style={{ padding: '0.5rem', textAlign: 'right' }}>{bowl.overs}</td>
                      <td style={{ padding: '0.5rem', textAlign: 'right' }}>{bowl.maidens}</td>
                      <td style={{ padding: '0.5rem', textAlign: 'right' }}>{bowl.runs}</td>
                      <td style={{ padding: '0.5rem', textAlign: 'right' }}>{bowl.wickets}</td>
                      <td style={{ padding: '0.5rem', textAlign: 'right' }}>{bowl.economy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderSquads = () => {
    if (!data || !data.players) return <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Squad listings unavailable.</p>;
    
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {/* Placeholder mapping since exact squad dictionary iterates depends heavily on specific match nodes */}
        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '12px' }}>
          <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>Team 1 Squad</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Visit ESPNCricinfo for exact playing 11 line splits during scraper outages.</p>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '12px' }}>
          <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>Team 2 Squad</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Squad renders dynamically inside scorecard nodes typically.</p>
        </div>
      </div>
    );
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000,
      background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
    }}>
      <div className="glass-panel animate-fade-in" style={{
        width: '100%', maxWidth: '800px', height: '85vh', overflowY: 'auto',
        borderRadius: '20px', display: 'flex', flexDirection: 'column', background: 'var(--bg-card)'
      }}>
        {/* Header */}
        <div style={{
          padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'
        }}>
          <div>
            <div style={{ color: 'var(--accent-gold)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.3rem' }}>Match Center</div>
            <h2 style={{ color: '#fff', margin: 0 }}>{match.team1.name} <span style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>vs</span> {match.team2.name}</h2>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.3rem' }}>{match.currentDetails}</div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '0.5rem' }}>
            <X size={24} />
          </button>
        </div>

        {/* Tabs navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '0 1.5rem' }}>
          {[
            { id: 'scorecard', name: 'Scorecard', icon: <Clipboard size={16} /> },
            { id: 'squads', name: 'Squads', icon: <Users size={16} /> },
            { id: 'commentary', name: 'Commentary / Updates', icon: <MessageSquare size={16} /> }
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: 'none', border: 'none', padding: '1rem 1.5rem', color: activeTab === tab.id ? 'var(--accent-gold)' : 'var(--text-secondary)',
                borderBottom: activeTab === tab.id ? '2px solid var(--accent-gold)' : '2px solid transparent', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: activeTab === tab.id ? 'bold' : 'normal'
              }}
            >
              {tab.icon} {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div style={{ padding: '1.5rem', flex: 1 }}>
          {activeTab === 'scorecard' && renderScorecard()}
          {activeTab === 'squads' && renderSquads()}
          {activeTab === 'commentary' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {(data?.commentary || []).slice(0, 10).map((cmt, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '1rem', borderRadius: '10px', fontSize: '0.9rem', color: '#fff' }}>
                  <div style={{ color: 'var(--accent-gold)', fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                    {cmt.overNumber ? `Over ${cmt.overNumber}` : 'Update'}
                  </div>
                  <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{cmt.title || cmt.text || 'Flash update ticker item.'}</p>
                </div>
              ))}
              {(!data || !data.commentary || data.commentary.length === 0) && <p style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>Commentary update stream setup unavailable.</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const NewsCard = ({ article }) => (
  <a href={article.url || '#'} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
    <div className="news-card">
      <div className="news-image" style={{ backgroundImage: `url(${article.image})` }}>
        <div className="news-category">{article.category}</div>
      </div>
      <div className="news-content">
        <h3 className="news-title">{article.title}</h3>
        <p className="news-summary">{article.summary}</p>
        <div className="news-meta">{article.time}</div>
      </div>
    </div>
  </a>
);

const LiveNewsPage = () => {
  const [matches, setMatches] = useState([]);
  const [news, setNews] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);

  // Match Center States
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [matchDetails, setMatchDetails] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const mData = await fetchLiveScores();
    const nData = await fetchCricketNews();
    const uData = await fetchUpcomingMatches();
    setMatches(mData);
    setNews(nData);
    setUpcoming(uData);
    setLoading(false);
  };

  const handleCardClick = async (match) => {
    setSelectedMatch(match);
    setLoadingDetails(true);
    const details = await fetchMatchDetails(match.url);
    setMatchDetails(details);
    setLoadingDetails(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="live-news-container animate-fade-in">

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem', color: 'var(--accent-gold)' }}>
          <RefreshCw className="animate-spin" size={32} style={{ animation: 'pulse 1s infinite' }} />
        </div>
      ) : (
        <>
          {/* Live Matches Section */}
          <section>
            <h2 className="section-header">
              <Radio className="text-accent" /> Live Scores <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>(Click card for match center)</span>
            </h2>
            <div className="matches-grid">
              {matches.length === 0 ? <p>No remote matches found.</p> : matches.map(match => (
                <MatchCard key={match.id} match={match} onClick={() => handleCardClick(match)} />
              ))}
            </div>
          </section>

          {/* Detailed Match Center Modal Overlay */}
          {selectedMatch && (
            <MatchCenterModal 
              match={selectedMatch} 
              data={matchDetails} 
              onClose={() => { setSelectedMatch(null); setMatchDetails(null); }} 
            />
          )}

          {/* Upcoming Schedule Section */}
          <section style={{ marginTop: '3rem' }}>
            <h2 className="section-header">
              <Calendar className="text-accent" /> Upcoming Schedule
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {upcoming.map(item => (
                <div key={item.id} className="glass-panel" style={{
                  padding: '1.2rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem'
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                      <span style={{ background: 'rgba(255,215,0,0.1)', color: 'var(--accent-gold)', padding: '3px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                        {item.series}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>• {item.type} Match</span>
                    </div>
                    <h3 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>{item.teams}</h3>
                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem', alignItems: 'center' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><MapPin size={14} /> {item.venue}</span>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right', minWidth: '120px' }}>
                    <div style={{ color: 'var(--accent-gold)', fontWeight: 'bold', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.3rem' }}>
                      <Calendar size={16} /> {item.date}
                    </div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.3rem', marginTop: '0.2rem' }}>
                      <Clock size={14} /> {item.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Latest News Section */}
          <section>
            <h2 className="section-header" style={{ marginTop: '2rem' }}>
              <Rss className="text-accent" /> Latest Updates
            </h2>
            <div className="news-grid">
              {news.length === 0 ? <p>No remote news found.</p> : news.map(article => <NewsCard key={article.id} article={article} />)}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default LiveNewsPage;
