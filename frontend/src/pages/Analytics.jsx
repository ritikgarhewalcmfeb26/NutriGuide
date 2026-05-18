import React from 'react';
import { BarChart, Calendar } from 'lucide-react';

const Analytics = () => {
  return (
    <div className="main-content">
      <div className="banner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ color: 'var(--theme-text-main)' }}>Weekly Analytics</h1>
          <p style={{ color: 'var(--theme-text-muted)', fontSize: '1.1rem' }}>Track your progress</p>
        </div>
        <BarChart size={48} style={{ opacity: 0.5, color: 'var(--theme-primary)' }} />
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <button className="btn-primary" style={{ flex: 1, padding: '1rem', fontSize: '1.1rem' }}>7d</button>
        <button className="btn-outline" style={{ flex: 1, padding: '1rem', fontSize: '1.1rem' }}>14d</button>
        <button className="btn-outline" style={{ flex: 1, padding: '1rem', fontSize: '1.1rem' }}>30d</button>
        <button className="btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <Calendar size={20} /> Calendar
        </button>
      </div>

      <div className="card" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--theme-text-muted)' }}>
        Chart placeholder
      </div>
    </div>
  );
};

export default Analytics;
