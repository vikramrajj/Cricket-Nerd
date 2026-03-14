import React, { useState, useEffect } from 'react';
import './Flashcard.css';
import { RefreshCcw, Shield, Award, Map, Scroll, HelpCircle, Activity, Star } from 'lucide-react';

const categoryIcons = {
  'Fielding': <Shield size={48} />,
  'Bowling': <Activity size={48} />,
  'Batting': <Award size={48} />,
  'Legendary Players': <Star size={48} />,
  'History': <Map size={48} />,
  'Rules': <Scroll size={48} />,
  'Formats & Tactics': <HelpCircle size={48} />
};

const categoryGradients = {
  'Fielding': 'linear-gradient(135deg, #143625 0%, #295F43 100%)',
  'Bowling': 'linear-gradient(135deg, #1E0038 0%, #40007A 100%)',
  'Batting': 'linear-gradient(135deg, #4D0000 0%, #900A0A 100%)',
  'Legendary Players': 'linear-gradient(135deg, #5C4308 0%, #AD8615 100%)',
  'History': 'linear-gradient(135deg, #3A2501 0%, #7A4E03 100%)',
  'Rules': 'linear-gradient(135deg, #021E3B 0%, #04437F 100%)',
  'Formats & Tactics': 'linear-gradient(135deg, #1C1C1C 0%, #383838 100%)'
};

const Flashcard = ({ card }) => {
  const [flipped, setFlipped] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    // Attempt load inspection to trap 404s
    const img = new Image();
    img.src = card.image;
    img.onload = () => setImgFailed(false);
    img.onerror = () => setImgFailed(true);
    setFlipped(false); // Reset flip on card change
  }, [card.image]);

  const fallbackGrad = categoryGradients[card.category] || 'linear-gradient(135deg, #111 0%, #333 100%)';

  return (
    <div className={`flashcard-container ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="flashcard-inner">
        {/* Front Face */}
        <div className="flashcard-front">
          <div 
            className="flashcard-image-bg" 
            style={{ 
              backgroundImage: imgFailed ? 'none' : `url(${card.image})`,
              background: imgFailed ? fallbackGrad : undefined,
              display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'
            }}
          >
            {imgFailed && (
              <div style={{ color: 'rgba(255,255,255,0.2)', transform: 'scale(2)' }}>
                {categoryIcons[card.category]}
              </div>
            )}
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
