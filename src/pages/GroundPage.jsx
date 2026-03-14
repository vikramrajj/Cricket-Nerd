import React from 'react';
import Ground from '../components/Ground';

const GroundPage = () => {
  return (
    <div className="animate-fade-in" style={{ padding: '0 1rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          Interactive Ground
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Explore the cricket field. Understand the strategic placement of fielders and the anatomy of a cricket pitch.
        </p>
      </div>
      
      <Ground />
    </div>
  );
};

export default GroundPage;
