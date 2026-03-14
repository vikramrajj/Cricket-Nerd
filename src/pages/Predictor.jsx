import React, { useState, useRef, useEffect } from 'react';
import { teams, venues, calculateWinProbability } from '../data/iplStats';
import { TrendingUp, MapPin, Users, Activity, Trophy, Star, Award, ChevronDown } from 'lucide-react';

// Custom Dropdown UI to replace native <select>
const CustomSelect = ({ value, options, onChange, placeholder, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.id === value);

  return (
    <div ref={ref} style={{ position: 'relative', width: '100%' }}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', 
          background: 'var(--bg-primary)', color: value ? '#fff' : 'rgba(255,255,255,0.5)', 
          border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {icon} {selectedOption ? selectedOption.name : placeholder}
        </span>
        <ChevronDown size={16} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
      </div>

      {isOpen && (
        <div className="animate-fade-in" style={{
          position: 'absolute', top: '110%', left: 0, right: 0, zIndex: 50,
          background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '8px', maxHeight: '250px', overflowY: 'auto',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)', padding: '0.5rem'
        }}>
          {options.map(opt => (
            <div 
              key={opt.id}
              onClick={() => { onChange(opt.id); setIsOpen(false); }}
              style={{
                padding: '0.8rem 1rem', cursor: 'pointer', borderRadius: '6px',
                color: value === opt.id ? 'var(--accent-gold)' : '#fff',
                background: value === opt.id ? 'rgba(255,215,0,0.1)' : 'transparent',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => { if(value !== opt.id) e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={(e) => { if(value !== opt.id) e.currentTarget.style.background = 'transparent' }}
            >
              {opt.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Predictor = () => {
  const [teamA, setTeamA] = useState('');
  const [teamB, setTeamB] = useState('');
  const [venue, setVenue] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handlePredict = () => {
    if (!teamA || !teamB || !venue) return;
    if (teamA === teamB) {
      alert("Please select different teams.");
      return;
    }

    // Dynamic probability using franchise history & home advantage
    const winProbA = calculateWinProbability(teamA, teamB, venue);
    const winProbB = 1 - winProbA;

    const vData = venues.find(v => v.id === venue);

    // Team Composition logic based on pitch
    let comp = "";
    if (vData.paceVsSpin.spin > 55) {
      comp = "Heavy Spin Attack. Recommend 3 frontline spinners and 2 pacers. Batsmen who play spin well are crucial.";
    } else if (vData.paceVsSpin.pace > 60) {
      comp = "Pace Battery. Recommend 3-4 fast bowlers. Quality top-order batsmen needed to handle the new ball swing.";
    } else {
      comp = "Balanced attack. 2 Spinners, 3 Pacers, and an extra all-rounder for depth.";
    }

    setPrediction({
      teamA: teams.find(t => t.id === teamA),
      teamB: teams.find(t => t.id === teamB),
      winProbA: (winProbA * 100).toFixed(1),
      winProbB: (winProbB * 100).toFixed(1),
      venueData: vData,
      composition: comp
    });
  };

  const getBarColor = (prob, teamColor) => {
    return prob > 50 ? teamColor : 'rgba(255,255,255,0.2)';
  };

  return (
    <div className="animate-fade-in" style={{ padding: '0 1rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <TrendingUp /> IPL Predictor & Analytics
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Select a matchup and a venue. Our algorithm analyzes historical Head-to-Head win rates at that specific ground and factors in pitch behavior (pace vs spin) to predict the outcome and recommend team compositions.
      </p>

      {/* Selection Form */}
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ flex: '1 1 200px' }}>
          <label style={{ display: 'block', color: '#fff', marginBottom: '0.8rem', fontWeight: 'bold' }}>Team 1</label>
          <CustomSelect 
            value={teamA} 
            options={teams} 
            onChange={setTeamA} 
            placeholder="Select Team 1..." 
            icon={<Users size={18} color="rgba(255,255,255,0.5)" />} 
          />
        </div>

        <div style={{ padding: '0 0.5rem', color: 'var(--text-secondary)', fontWeight: 'bold', fontSize: '1.2rem', marginTop: '1.5rem' }}>VS</div>

        <div style={{ flex: '1 1 200px' }}>
          <label style={{ display: 'block', color: '#fff', marginBottom: '0.8rem', fontWeight: 'bold' }}>Team 2</label>
          <CustomSelect 
            value={teamB} 
            options={teams} 
            onChange={setTeamB} 
            placeholder="Select Team 2..." 
            icon={<Users size={18} color="rgba(255,255,255,0.5)" />} 
          />
        </div>

        <div style={{ flex: '1 1 250px' }}>
          <label style={{ display: 'block', color: '#fff', marginBottom: '0.8rem', fontWeight: 'bold' }}>Venue</label>
          <CustomSelect 
            value={venue} 
            options={venues} 
            onChange={setVenue} 
            placeholder="Select Destination Match Venue..." 
            icon={<MapPin size={18} color="rgba(255,255,255,0.5)" />} 
          />
        </div>

        <button 
          onClick={handlePredict}
          disabled={!teamA || !teamB || !venue}
          style={{
            background: 'var(--accent-gold)', color: 'var(--bg-primary)', border: 'none', padding: '0.8rem 2rem', 
            borderRadius: '8px', fontWeight: 'bold', cursor: (!teamA || !teamB || !venue) ? 'not-allowed' : 'pointer',
            opacity: (!teamA || !teamB || !venue) ? 0.5 : 1
          }}
        >
          Analyze
        </button>
      </div>

      {/* Results Section */}
      {prediction && (
        <div className="glass-panel animate-fade-in" style={{ padding: '2rem', borderRadius: '16px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
            Match Prediction
          </h2>

          {/* Win Probability Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: prediction.teamA.color }}>{prediction.teamA.id} ({prediction.winProbA}%)</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: prediction.teamB.color }}>{prediction.teamB.id} ({prediction.winProbB}%)</span>
          </div>
          <div style={{ width: '100%', height: '24px', background: '#333', borderRadius: '12px', overflow: 'hidden', display: 'flex', marginBottom: '3rem' }}>
            <div style={{ width: `${prediction.winProbA}%`, background: prediction.teamA.color, transition: 'width 1s ease' }}></div>
            <div style={{ width: `${prediction.winProbB}%`, background: prediction.teamB.color, transition: 'width 1s ease' }}></div>
          </div>

          {/* Franchise Profiles & Rosters */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {[prediction.teamA, prediction.teamB].map(team => (
              <div key={team.id} style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: `1px solid ${team.color}50` }}>
                <h3 style={{ color: team.color, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.3rem' }}>
                  <Trophy size={20} /> {team.name}
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                  <div style={{ background: 'var(--bg-primary)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Titles</div>
                    <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.1rem' }}>{team.stats.titles}</div>
                  </div>
                  <div style={{ background: 'var(--bg-primary)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Win Rate</div>
                    <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.1rem' }}>{team.stats.winRatio}%</div>
                  </div>
                  <div style={{ background: 'var(--bg-primary)', padding: '0.8rem', borderRadius: '8px', gridColumn: 'span 2' }}>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Best Era</div>
                    <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.1rem' }}>{team.stats.bestEra}</div>
                  </div>
                </div>

                <h4 style={{ color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                  <Star size={16} color="var(--accent-gold)" /> Franchise Legends
                </h4>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {team.legends.map((legend, idx) => (
                    <div key={idx} style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px', borderLeft: `3px solid ${team.color}` }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.3rem' }}>
                        <span style={{ fontWeight: 'bold', color: '#fff' }}>{legend.name}</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: '10px' }}>{legend.years}</span>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', marginBottom: '0.3rem' }}>{legend.role} • {legend.matches} Matches</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}><Award size={12} style={{ verticalAlign: 'middle', marginRight: '4px' }}/> {legend.keyStat}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {/* Venue Analysis */}
            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={18} /> Venue Analysis
              </h3>
              <p style={{ color: '#fff', marginBottom: '0.5rem' }}><strong>Pitch Type:</strong> {prediction.venueData.pitchType}</p>
              <p style={{ color: '#fff', marginBottom: '1rem' }}><strong>Avg 1st Innings:</strong> {prediction.venueData.avgFirstInnings}</p>
              
              <div style={{ marginTop: '1rem' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>Pace vs Spin Wickets (%)</p>
                <div style={{ display: 'flex', height: '12px', borderRadius: '6px', overflow: 'hidden' }}>
                  <div style={{ width: `${prediction.venueData.paceVsSpin.pace}%`, background: '#ff4d4d' }} title="Pace"></div>
                  <div style={{ width: `${prediction.venueData.paceVsSpin.spin}%`, background: '#3498db' }} title="Spin"></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginTop: '0.3rem', color: '#fff' }}>
                  <span>Pace: {prediction.venueData.paceVsSpin.pace}%</span>
                  <span>Spin: {prediction.venueData.paceVsSpin.spin}%</span>
                </div>
              </div>
            </div>

            {/* Team Recommendation */}
            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Activity size={18} /> Fantasy Composition
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Based on the pitch behavior at {prediction.venueData.name}:
              </p>
              <p style={{ color: '#fff', marginTop: '1rem', fontStyle: 'italic', paddingLeft: '1rem', borderLeft: '3px solid var(--accent-gold)' }}>
                "{prediction.composition}"
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Predictor;
