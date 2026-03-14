import React, { useState } from 'react';
import './Ground.css';
import { fieldingPositions } from '../data/fielding';
import { ShieldAlert, Crosshair, Activity, Navigation, Shield, User } from 'lucide-react';

const Ground = () => {
  const [activePos, setActivePos] = useState(null);

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <div className="ground-container">
        <div className="inner-circle" />
        
        <div className="pitch">
          <div className="crease-line crease-top" />
          <div className="stumps stumps-top" />
          
          <div className="crease-line crease-bottom" />
          <div className="stumps stumps-bottom" />
        </div>

        {fieldingPositions.map((pos) => (
          <div
            key={pos.id}
            className={`fielding-node ${activePos?.id === pos.id ? 'active' : ''}`}
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            onMouseEnter={() => setActivePos(pos)}
            onClick={() => setActivePos(pos)}
          >
            <div className="fielding-label">{pos.name}</div>
          </div>
        ))}
      </div>

      <div className="ground-info animate-fade-in">
        {activePos ? (
          <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '1.5rem', alignItems: 'center' }}>
            
            {/* Pictorial Icon Box */}
            <div style={{
              background: 'rgba(255,215,0,0.1)', border: '1px solid var(--accent-gold)', borderRadius: '12px',
              width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)'
            }}>
              {activePos.role === 'Wicket Keeper' && <Shield size={40} />}
              {activePos.role === 'Close Catcher' && <Crosshair size={40} />}
              {activePos.role === 'Intimidator' && <ShieldAlert size={40} />}
              {activePos.role === 'Ring Fielder' && <Activity size={40} />}
              {activePos.role === 'Boundary Rider' && <Navigation size={40} />}
              {!activePos.role && <User size={40} />}
            </div>

            {/* Content Info */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.3rem' }}>
                <h3 style={{ color: 'var(--accent-gold)', margin: 0, fontSize: '1.4rem' }}>{activePos.name}</h3>
                <span style={{ background: 'var(--bg-primary)', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', color: '#fff' }}>
                  {activePos.role}
                </span>
              </div>
              <p style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.5rem', fontStyle: 'italic' }}>
                Intent: {activePos.intent}
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                {activePos.description}
              </p>
            </div>
            
          </div>
        ) : (
          <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
            Hover or tap on a golden dot to explore the fielding position.
          </div>
        )}
      </div>
    </div>
  );
};

export default Ground;
