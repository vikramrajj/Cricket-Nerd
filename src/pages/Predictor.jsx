import React, { useState } from 'react';
import { teams, venues, historicalH2H } from '../data/iplStats';
import { TrendingUp, MapPin, Users, Activity } from 'lucide-react';

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

    // Default 50/50 if combinations are missing in mock data
    let winProbA = 0.5;
    if (historicalH2H[teamA] && historicalH2H[teamA][teamB] && historicalH2H[teamA][teamB][venue]) {
      winProbA = historicalH2H[teamA][teamB][venue];
    } else if (historicalH2H[teamB] && historicalH2H[teamB][teamA] && historicalH2H[teamB][teamA][venue]) {
      winProbA = 1 - historicalH2H[teamB][teamA][venue];
    }

    const vData = venues.find(v => v.id === venue);
    const winProbB = 1 - winProbA;

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
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'flex-end', marginBottom: '2rem' }}>
        <div style={{ flex: '1 1 200px' }}>
          <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem' }}><Users size={16} style={{ verticalAlign: 'middle' }}/> Team 1</label>
          <select value={teamA} onChange={e => setTeamA(e.target.value)} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'var(--bg-primary)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>
            <option value="">Select Team 1...</option>
            {teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </div>

        <div style={{ paddingBottom: '0.8rem', color: 'var(--text-secondary)', fontWeight: 'bold' }}>VS</div>

        <div style={{ flex: '1 1 200px' }}>
          <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem' }}><Users size={16} style={{ verticalAlign: 'middle' }}/> Team 2</label>
          <select value={teamB} onChange={e => setTeamB(e.target.value)} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'var(--bg-primary)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>
            <option value="">Select Team 2...</option>
            {teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </div>

        <div style={{ flex: '1 1 250px' }}>
          <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem' }}><MapPin size={16} style={{ verticalAlign: 'middle' }}/> Venue</label>
          <select value={venue} onChange={e => setVenue(e.target.value)} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'var(--bg-primary)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>
            <option value="">Select Venue...</option>
            {venues.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
          </select>
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
