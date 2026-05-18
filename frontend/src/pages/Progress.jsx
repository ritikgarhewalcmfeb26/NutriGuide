import React, { useState } from 'react';
import { Plus, Target, Activity, Droplets } from 'lucide-react';

const Progress = () => {
  const [water, setWater] = useState(0);

  return (
    <div className="main-content">
      <div className="banner bg-purple" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>Progress Tracking</h1>
          <p>Monitor your nutrition & fitness journey</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn-primary" style={{ background: 'white', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Plus size={18} /> Log Meal</button>
          <button className="btn-primary" style={{ background: 'white', color: '#a855f7', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Activity size={18} /> Log Exercise</button>
          <button className="btn-primary" style={{ background: 'white', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Target size={18} /> Update Weight</button>
        </div>
      </div>

      <div className="grid-4">
        <div className="card">
          <div style={{ width: '40px', height: '40px', background: '#dcfce7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <Target color="#10b981" />
          </div>
          <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--text-muted)' }}>CALORIES TODAY</p>
          <h2 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>0 <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>of 2000</span></h2>
        </div>
        <div className="card">
          <div style={{ width: '40px', height: '40px', background: '#dcfce7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <Activity color="#10b981" />
          </div>
          <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--text-muted)' }}>REMAINING</p>
          <h2 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>2000 <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>calories</span></h2>
        </div>
        <div className="card">
          <div style={{ width: '40px', height: '40px', background: '#eff6ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <Activity color="#3b82f6" />
          </div>
          <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--text-muted)' }}>MEALS LOGGED</p>
          <h2 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>0 <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>today</span></h2>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.1rem' }}>Daily Goal Progress</h3>
          <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>0%</span>
        </div>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: '0%' }}></div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Today's Macronutrients</h3>
        <div className="grid-4" style={{ marginBottom: '0' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.5rem' }}><span>Protein</span><span>0g / 150g</span></div>
            <div className="progress-container"><div className="progress-bar" style={{ width: '0%' }}></div></div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.5rem' }}><span>Carbs</span><span>0g / 200g</span></div>
            <div className="progress-container"><div className="progress-bar" style={{ width: '0%', background: '#3b82f6' }}></div></div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.5rem' }}><span>Fats</span><span>0g / 67g</span></div>
            <div className="progress-container"><div className="progress-bar" style={{ width: '0%', background: '#f59e0b' }}></div></div>
          </div>
        </div>
      </div>

      <div className="water-tracker">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1d4ed8' }}><Droplets /> Water Intake</h3>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1d4ed8' }}>{water}ml</span>
            <div style={{ fontSize: '0.8rem', color: '#3b82f6' }}>of 2000ml</div>
          </div>
        </div>
        <div className="progress-container" style={{ background: '#bfdbfe' }}>
          <div className="progress-bar" style={{ width: `${Math.min((water/2000)*100, 100)}%`, background: '#3b82f6' }}></div>
        </div>
        <div className="water-buttons">
          <button className="water-btn" onClick={() => setWater(w => w + 250)}>+250ml</button>
          <button className="water-btn" onClick={() => setWater(w => w + 500)}>+500ml</button>
          <button className="water-btn" onClick={() => setWater(w => w + 750)}>+750ml</button>
          <button className="water-btn filled">Custom</button>
        </div>
      </div>
    </div>
  );
};

export default Progress;
