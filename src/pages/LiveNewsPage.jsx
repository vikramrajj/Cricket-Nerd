import React, { useState, useEffect } from 'react';
import './LiveNewsPage.css';
import { fetchLiveScores, fetchCricketNews, fetchUpcomingMatches } from '../data/api';
import { Radio, Rss, RefreshCw, Calendar, Clock, MapPin } from 'lucide-react';

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

const LiveNewsPage = () => {
  const [matches, setMatches] = useState([]);
  const [news, setNews] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);

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
              <Radio className="text-accent" /> Live Scores
            </h2>
            <div className="matches-grid">
              {matches.length === 0 ? <p>No remote matches found.</p> : matches.map(match => <MatchCard key={match.id} match={match} />)}
            </div>
          </section>

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
