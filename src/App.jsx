import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Trophy, Home as HomeIcon, Map, Newspaper, Activity } from 'lucide-react';
import Deck from './pages/Deck.jsx';
import GroundPage from './pages/GroundPage.jsx';
import LiveNewsPage from './pages/LiveNewsPage.jsx';
import Home from './pages/Home.jsx';
import Predictor from './pages/Predictor.jsx';
import './App.css'; 

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: <HomeIcon size={20} /> },
    { name: 'The Deck', path: '/deck', icon: <Trophy size={20} /> },
    { name: 'The Ground', path: '/ground', icon: <Map size={20} /> },
    { name: 'Live & News', path: '/news', icon: <Newspaper size={20} /> },
    { name: 'Predictor', path: '/predictor', icon: <Activity size={20} /> },
  ];

  return (
    <nav className="glass-panel" style={{
      position: 'sticky', top: 0, zIndex: 100,
      padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          background: 'var(--accent-gold)', borderRadius: '50%', width: '40px', height: '40px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bg-primary)'
        }}>
          <Trophy size={24} />
        </div>
        <h2 style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '2px', color: '#fff' }}>
          Cricket<span style={{ color: 'var(--accent-gold)' }}>Geek</span>
        </h2>
      </div>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                color: isActive ? 'var(--accent-gold)' : 'var(--text-secondary)',
                fontWeight: isActive ? '600' : '400',
                borderBottom: isActive ? '2px solid var(--accent-gold)' : '2px solid transparent',
                paddingBottom: '4px',
                transition: 'all var(--transition-fast)'
              }}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deck" element={<Deck />} />
          <Route path="/ground" element={<GroundPage />} />
          <Route path="/news" element={<LiveNewsPage />} />
          <Route path="/predictor" element={<Predictor />} />
        </Routes>
      </main>

      <footer style={{
        textAlign: 'center', padding: '2rem', marginTop: 'auto',
        color: 'var(--text-secondary)', fontSize: '0.875rem',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}>
        <p>© 2026 Cricket Geek. For the love of the game.</p>
      </footer>
    </div>
  );
}

export default App;
