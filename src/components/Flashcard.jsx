import React, { useState } from 'react';
import './Flashcard.css';
import { RefreshCcw } from 'lucide-react';

const Flashcard = ({ card }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flashcard-container ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="flashcard-inner">
        {/* Front Face */}
        <div className="flashcard-front">
          <div 
            className="flashcard-image-bg" 
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="flashcard-category-tag">{card.category}</div>
          </div>
          <div className="flashcard-content">
            <h3>{card.title}</h3>
            <p>{card.shortDesc}</p>
            <div className="tap-hint" style={{ marginTop: '2rem' }}>
              Tap to reveal
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="flashcard-back">
          <div>
            <h3>{card.title}</h3>
            <p>{card.explanation}</p>
          </div>
          
          <div className="tap-hint" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <RefreshCcw size={16} /> Tap to flip back
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
