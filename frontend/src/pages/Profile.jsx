import React, { useState } from 'react';
import { User, Activity, Target, Dumbbell, Apple, Save } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

const Profile = () => {
  const { user, updateUser } = useAuth();
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    age: user?.age || '',
    height: user?.height || '',
    weight: user?.weight || '',
    health_goal: user?.health_goal || 'maintain',
    diet_preference: user?.diet_preference || 'none'
  });
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await api.put('/auth/profile', formData);
      updateUser(res.data);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Failed to update profile', error);
      alert('Error saving profile');
    }
    setSaving(false);
  };

  return (
    <div className="main-content">
      <div className="banner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ color: 'var(--theme-text-main)' }}>Profile Settings</h1>
          <p style={{ color: 'var(--theme-text-muted)' }}>Manage your health & fitness preferences</p>
        </div>
        <button onClick={handleSave} disabled={saving} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Save size={18} /> {saving ? 'Saving...' : 'Save Profile'}
        </button>
      </div>

      <div className="profile-section">
        <div className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <User size={20} color="var(--theme-primary)" /> Personal Information
        </div>
        <div className="profile-body grid-2" style={{ padding: '1.5rem' }}>
          <div className="form-group">
            <label>Full Name</label>
            <div style={{ position: 'relative' }}>
              <User size={18} color="var(--theme-text-muted)" style={{ position: 'absolute', top: '12px', left: '12px' }} />
              <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ paddingLeft: '2.5rem' }} />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <div style={{ position: 'relative' }}>
              <User size={18} color="var(--theme-text-muted)" style={{ position: 'absolute', top: '12px', left: '12px' }} />
              <input type="email" value={user?.email || ''} style={{ paddingLeft: '2.5rem' }} readOnly />
            </div>
          </div>
          <div className="form-group">
            <label>Age</label>
            <div style={{ position: 'relative' }}>
              <User size={18} color="var(--theme-text-muted)" style={{ position: 'absolute', top: '12px', left: '12px' }} />
              <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Enter age" style={{ paddingLeft: '2.5rem' }} />
            </div>
          </div>
          <div className="form-group">
            <label>Gender</label>
            <div style={{ position: 'relative' }}>
              <User size={18} color="var(--theme-text-muted)" style={{ position: 'absolute', top: '12px', left: '12px' }} />
              <select style={{ paddingLeft: '2.5rem' }}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-section">
        <div className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Activity size={20} color="var(--theme-accent)" /> Health Metrics
        </div>
        <div className="profile-body" style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <div className="form-group">
            <label>Height (cm)</label>
            <input type="number" name="height" value={formData.height} onChange={handleChange} placeholder="Enter height" />
          </div>
          <div className="form-group">
            <label>Current Weight (kg)</label>
            <input type="number" name="weight" value={formData.weight} onChange={handleChange} placeholder="Enter weight" />
          </div>
          <div className="form-group">
            <label>Target Weight (kg)</label>
            <input type="number" placeholder="Enter target" />
          </div>
        </div>
      </div>

      <div className="profile-section">
        <div className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Target size={20} color="var(--theme-secondary)" /> Fitness Goals & Activity
        </div>
        <div className="profile-body grid-2" style={{ padding: '1.5rem' }}>
          <div className="form-group">
            <label>Fitness Goal</label>
            <select name="health_goal" value={formData.health_goal} onChange={handleChange}>
              <option value="lose_weight">Lose Weight</option>
              <option value="maintain">Maintain Weight</option>
              <option value="gain_muscle">Build Muscle</option>
            </select>
          </div>
          <div className="form-group">
            <label>Activity Level</label>
            <select>
              <option>Sedentary (Little/No Exercise)</option>
              <option>Lightly Active (1-3 days/week)</option>
              <option>Moderately Active (3-5 days/week)</option>
              <option>Very Active (6-7 days/week)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="profile-section">
        <div className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Dumbbell size={20} color="var(--theme-primary)" /> Exercise Preferences
        </div>
        <div className="profile-body" style={{ padding: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Preferred Exercise Types</label>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {['cardio', 'strength', 'yoga', 'pilates', 'cycling', 'swimming', 'running', 'walking', 'sports', 'dance'].map(type => (
              <span key={type} style={{ padding: '0.25rem 0.75rem', background: 'var(--input-bg)', borderRadius: '16px', fontSize: '0.9rem', color: 'var(--theme-text-muted)' }}>{type}</span>
            ))}
          </div>
          <div className="grid-2">
            <div className="form-group">
              <label>Exercise Duration (minutes/day)</label>
              <input type="number" defaultValue={30} />
            </div>
            <div className="form-group">
              <label>Exercise Frequency (days/week)</label>
              <input type="number" defaultValue={3} />
            </div>
          </div>
        </div>
      </div>

      <div className="profile-section">
        <div className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Apple size={20} color="var(--theme-danger)" /> Dietary Preferences
        </div>
        <div className="profile-body" style={{ padding: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Diet Type</label>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {['none', 'vegan', 'vegetarian', 'keto'].map(type => (
              <span 
                key={type} 
                onClick={() => setFormData({ ...formData, diet_preference: type })}
                style={{ 
                  padding: '0.25rem 0.75rem', 
                  background: formData.diet_preference === type ? 'var(--theme-primary)' : 'var(--input-bg)', 
                  color: formData.diet_preference === type ? 'var(--theme-text-inverse)' : 'var(--theme-text-muted)',
                  borderRadius: '16px', 
                  fontSize: '0.9rem', 
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}>
                {type}
              </span>
            ))}
          </div>
          <div className="form-group">
            <label>Allergies & Restrictions</label>
            <textarea style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--theme-border)', borderRadius: '12px', background: 'var(--input-bg)', color: 'var(--theme-text-main)' }} rows="3" placeholder="Enter allergies separated by commas (e.g., peanuts, dairy, gluten)"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
