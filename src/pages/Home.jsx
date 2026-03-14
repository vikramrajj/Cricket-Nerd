import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Map, Newspaper, Play, Activity } from 'lucide-react';
import { mockMatches } from '../data/mockData';

const Home = () => {
  const featuredMatch = mockMatches[0];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', padding: '1rem' }}>
      
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(26, 54, 40, 0.2) 100%)',
        borderRadius: '20px', padding: '3rem 2rem', border: '1px solid rgba(255,255,255,0.05)',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '600px', position: 'relative', zIndex: 10 }}>
          <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>
            Master the Game of <span style={{ color: 'var(--accent-gold)' }}>Gentlemen</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Learn the rules, understand the ground, and stay updated with live scores in this interactive cricket experience.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/deck" style={{
              background: 'var(--accent-gold)', color: 'var(--bg-primary)', padding: '1rem 2rem',
              borderRadius: '30px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem',
              boxShadow: '0 4px 15px var(--accent-gold-glow)'
            }}>
              Start Learning <Play fill="currentColor" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        
        <Link to="/deck" className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', transition: 'transform 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
          <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '1rem', borderRadius: '12px', color: 'var(--accent-gold)' }}>
            <Trophy size={32} />
          </div>
          <h3 style={{ fontSize: '1.5rem', color: '#fff' }}>The Deck</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Gamified flashcards to learn fielding positions, rules, and legendary players.</p>
        </Link>
        
        <Link to="/ground" className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', transition: 'transform 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
          <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '1rem', borderRadius: '12px', color: 'var(--accent-gold)' }}>
            <Map size={32} />
          </div>
          <h3 style={{ fontSize: '1.5rem', color: '#fff' }}>Interactive Ground</h3>
          <p style={{ color: 'var(--text-secondary)' }}>A 2D top-down view of the pitch with hoverable fielding positions.</p>
        </Link>
        
        <Link to="/news" className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', transition: 'transform 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
          <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '1rem', borderRadius: '12px', color: 'var(--accent-gold)' }}>
            <Newspaper size={32} />
          </div>
          <h3 style={{ fontSize: '1.5rem', color: '#fff' }}>Live & News</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Get live match simulators and the latest cricket news from around the world.</p>
        </Link>
        
        <Link to="/predictor" className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', transition: 'transform 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
          <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '1rem', borderRadius: '12px', color: 'var(--accent-gold)' }}>
            <Activity size={32} />
          </div>
          <h3 style={{ fontSize: '1.5rem', color: '#fff' }}>IPL Predictor</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Analyze matchups, venues, and get AI-driven fantasy team compositions.</p>
        </Link>

      </section>
      
    </div>
  );
};

export default Home;
