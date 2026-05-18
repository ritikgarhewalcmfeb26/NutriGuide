import React from 'react';
import { BarChart, Calendar } from 'lucide-react';

const Analytics = () => {
  return (
    <div className="main-content">
      <div className="banner" style={{ background: 'linear-gradient(135deg, #3b82f6, #ec4899)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>Weekly Analytics</h1>
          <p>Track your progress</p>
        </div>
        <BarChart size={48} style={{ opacity: 0.5 }} />
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button style={{ flex: 1, padding: '1rem', background: 'linear-gradient(135deg, #3b82f6, #a855f7)', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}>7d</button>
        <button style={{ flex: 1, padding: '1rem', background: 'white', color: 'var(--text-main)', border: '1px solid var(--border-color)', borderRadius: '12px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}>14d</button>
        <button style={{ flex: 1, padding: '1rem', background: 'white', color: 'var(--text-main)', border: '1px solid var(--border-color)', borderRadius: '12px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}>30d</button>
        <button style={{ padding: '1rem 2rem', background: 'linear-gradient(135deg, #a855f7, #ec4899)', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
          <Calendar size={20} /> Calendar
        </button>
      </div>

      <div className="card" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
        Chart placeholder
      </div>
    </div>
  );
};

export default Analytics;
