import React, { useState } from 'react';
import { Plus, Target, Activity, Droplets } from 'lucide-react';

const Progress = () => {
  const [water, setWater] = useState(0);

  return (
    <div className="main-content">
      <div className="banner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ color: 'var(--theme-text-main)' }}>Progress Tracking</h1>
          <p style={{ color: 'var(--theme-text-muted)', fontSize: '1.1rem' }}>Monitor your nutrition & fitness journey</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Plus size={18} /> Log Meal</button>
          <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Activity size={18} /> Log Exercise</button>
          <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Target size={18} /> Update Weight</button>
        </div>
      </div>

      <div className="grid-4">
        <div className="card glow-primary">
          <div className="icon-circle" style={{ width: '40px', height: '40px', marginBottom: '1rem', color: 'var(--theme-primary)' }}>
            <Target />
          </div>
          <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--theme-text-muted)' }}>CALORIES TODAY</p>
          <h2 style={{ fontSize: '2rem', marginTop: '0.5rem', color: 'var(--theme-text-main)' }}>0 <span style={{ fontSize: '1rem', color: 'var(--theme-text-muted)', fontWeight: 'normal' }}>of 2000</span></h2>
        </div>
        <div className="card glow-accent">
          <div className="icon-circle" style={{ width: '40px', height: '40px', marginBottom: '1rem', color: 'var(--theme-accent)' }}>
            <Activity />
          </div>
          <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--theme-text-muted)' }}>REMAINING</p>
          <h2 style={{ fontSize: '2rem', marginTop: '0.5rem', color: 'var(--theme-text-main)' }}>2000 <span style={{ fontSize: '1rem', color: 'var(--theme-text-muted)', fontWeight: 'normal' }}>calories</span></h2>
        </div>
        <div className="card glow-secondary">
          <div className="icon-circle" style={{ width: '40px', height: '40px', marginBottom: '1rem', color: 'var(--theme-secondary)' }}>
            <Activity />
          </div>
          <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--theme-text-muted)' }}>MEALS LOGGED</p>
          <h2 style={{ fontSize: '2rem', marginTop: '0.5rem', color: 'var(--theme-text-main)' }}>0 <span style={{ fontSize: '1rem', color: 'var(--theme-text-muted)', fontWeight: 'normal' }}>today</span></h2>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--theme-text-main)' }}>Daily Goal Progress</h3>
          <span style={{ fontWeight: 'bold', color: 'var(--theme-primary)' }}>0%</span>
        </div>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: '0%', background: 'var(--theme-primary)' }}></div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--theme-text-main)' }}>Today's Macronutrients</h3>
        <div className="grid-4" style={{ marginBottom: '0' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--theme-text-main)' }}><span>Protein</span><span style={{color:'var(--theme-text-muted)'}}>0g / 150g</span></div>
            <div className="progress-container"><div className="progress-bar" style={{ width: '0%', background: 'var(--theme-primary)' }}></div></div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--theme-text-main)' }}><span>Carbs</span><span style={{color:'var(--theme-text-muted)'}}>0g / 200g</span></div>
            <div className="progress-container"><div className="progress-bar" style={{ width: '0%', background: 'var(--theme-secondary)' }}></div></div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--theme-text-main)' }}><span>Fats</span><span style={{color:'var(--theme-text-muted)'}}>0g / 67g</span></div>
            <div className="progress-container"><div className="progress-bar" style={{ width: '0%', background: 'var(--theme-accent)' }}></div></div>
          </div>
        </div>
      </div>

      <div className="card water-tracker">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--theme-secondary)' }}><Droplets /> Water Intake</h3>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--theme-secondary)' }}>{water}ml</span>
            <div style={{ fontSize: '0.8rem', color: 'var(--theme-text-muted)' }}>of 2000ml</div>
          </div>
        </div>
        <div className="progress-container" style={{ marginBottom: '1.5rem' }}>
          <div className="progress-bar" style={{ width: `${Math.min((water/2000)*100, 100)}%`, background: 'var(--theme-secondary)' }}></div>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="btn-outline" style={{flex: 1}} onClick={() => setWater(w => w + 250)}>+250ml</button>
          <button className="btn-outline" style={{flex: 1}} onClick={() => setWater(w => w + 500)}>+500ml</button>
          <button className="btn-outline" style={{flex: 1}} onClick={() => setWater(w => w + 750)}>+750ml</button>
          <button className="btn-primary" style={{flex: 1}}>Custom</button>
        </div>
      </div>
    </div>
  );
};

export default Progress;
