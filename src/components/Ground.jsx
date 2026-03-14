import React, { useState } from 'react';
import './Ground.css';
import { fieldingPositions } from '../data/fielding';

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
          <div>
            <h3 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>{activePos.name}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{activePos.description}</p>
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
