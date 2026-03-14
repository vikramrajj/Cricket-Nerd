import React, { useState, useEffect } from 'react';
import './LiveNewsPage.css';
import { fetchLiveScores, fetchCricketNews } from '../data/api';
import { Radio, Rss, Key, RefreshCw } from 'lucide-react';

const MatchCard = ({ match }) => (
  <div className="match-card">
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

const ApiKeyModal = ({ onClose }) => {
  const [cricKey, setCricKey] = useState(localStorage.getItem('cricApiKey') || '');
  const [newsKey, setNewsKey] = useState(localStorage.getItem('newsApiKey') || '');

  const handleSave = () => {
    if(cricKey) localStorage.setItem('cricApiKey', cricKey);
    else localStorage.removeItem('cricApiKey');
    
    if(newsKey) localStorage.setItem('newsApiKey', newsKey);
    else localStorage.removeItem('newsApiKey');
    
    onClose();
    window.location.reload(); // Quick refresh to trigger effect
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div className="glass-panel animate-fade-in" style={{
        padding: '2rem', borderRadius: '16px', width: '90%', maxWidth: '500px'
      }}>
        <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Key /> Setup Live Data API
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          Enter your free API keys below. If left blank, the app will continue to use gracefully crafted mock dataset.
        </p>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem' }}>CricAPI Key (cricketdata.org)</label>
          <input 
            type="password"
            value={cricKey}
            onChange={e => setCricKey(e.target.value)}
            style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-primary)', color: '#fff' }}
            placeholder="Enter API Key or leave empty for Mocks"
          />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem' }}>NewsAPI Key (newsapi.org)</label>
          <input 
            type="password"
            value={newsKey}
            onChange={e => setNewsKey(e.target.value)}
            style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-primary)', color: '#fff' }}
            placeholder="Enter API Key or leave empty for Mocks"
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <button onClick={onClose} style={{
            background: 'transparent', color: '#fff', border: 'none', cursor: 'pointer', padding: '0.8rem 1.5rem', borderRadius: '8px'
          }}>Cancel</button>

          <button onClick={handleSave} style={{
            background: 'var(--accent-gold)', color: 'var(--bg-primary)', border: 'none', cursor: 'pointer', padding: '0.8rem 1.5rem', borderRadius: '8px', fontWeight: 'bold'
          }}>Save & Refresh</button>
        </div>
      </div>
    </div>
  );
};

const LiveNewsPage = () => {
  const [matches, setMatches] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const mData = await fetchLiveScores();
    const nData = await fetchCricketNews();
    setMatches(mData);
    setNews(nData);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="live-news-container animate-fade-in">
      
      {showSettings && <ApiKeyModal onClose={() => setShowSettings(false)} />}
      
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem 1rem 0 1rem' }}>
        <button 
          onClick={() => setShowSettings(true)}
          style={{
            background: 'var(--bg-card)', color: 'var(--text-secondary)', border: '1px solid rgba(255,255,255,0.1)',
            padding: '0.6rem 1rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer',
            transition: 'color var(--transition-fast)'
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--accent-gold)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
        >
          <Key size={16} /> API Config
        </button>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem', color: 'var(--accent-gold)' }}>
          <RefreshCw className="animate-spin" size={32} style={{ animation: 'pulse 1s infinite' }} />
        </div>
      ) : (
        <>
          {/* Live Matches Section */}
          <section>
            <h2 className="section-header">
              <Radio className="text-accent" /> Live Scores
            </h2>
            <div className="matches-grid">
              {matches.length === 0 ? <p>No remote matches found.</p> : matches.map(match => <MatchCard key={match.id} match={match} />)}
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
