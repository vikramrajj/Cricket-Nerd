import React, { useState } from 'react';
import Flashcard from '../components/Flashcard.jsx';
import { flashcardData } from '../data/flashcards.js';
import { ChevronRight, Target } from 'lucide-react';

const Deck = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    setScore(score + 10);
    setCurrentIndex((prev) => (prev + 1) % flashcardData.length);
  };

  return (
    <div className="animate-fade-in" style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', 
      minHeight: '80vh', padding: '2rem 0'
    }}>
      {/* Header / Score */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '400px',
        marginBottom: '2rem', background: 'rgba(26, 54, 40, 0.4)', padding: '1rem', 
        borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ color: 'var(--text-secondary)' }}>
          Card {currentIndex + 1} / {flashcardData.length}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', fontWeight: 'bold' }}>
          <Target size={18} /> {score} XP
        </div>
      </div>

      {/* Card area */}
      <Flashcard key={currentIndex} card={flashcardData[currentIndex]} />

      {/* Controls */}
      <button 
        onClick={handleNext}
        style={{
          marginTop: '3rem',
          background: 'var(--accent-gold)',
          color: 'var(--bg-primary)',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '30px',
          fontSize: '1.2rem',
          fontWeight: '700',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
          boxShadow: '0 4px 15px var(--accent-gold-glow)'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
      >
        Next Card <ChevronRight size={20} />
      </button>

      <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', textAlign: 'center' }}>
        Learn facts and earn XP to level up your cricket knowledge.
      </p>
    </div>
  );
};

export default Deck;
