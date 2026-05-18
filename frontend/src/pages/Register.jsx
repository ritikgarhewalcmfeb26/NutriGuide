import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';

const Register = () => {
    const [formData, setFormData] = useState({ 
        name: '', email: '', password: '', 
        age: '', weight: '', height: '', 
        diet_preference: 'none', health_goal: 'maintain' 
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await api.post('/auth/register', formData);
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit} className="auth-form">
                <h2>Register for NutriGuide</h2>
                {error && <p className="error">{error}</p>}
                
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                </div>
                
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} required />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Age</label>
                        <input type="number" value={formData.age} onChange={e => setFormData({ ...formData, age: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Weight (kg)</label>
                        <input type="number" value={formData.weight} onChange={e => setFormData({ ...formData, weight: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Height (cm)</label>
                        <input type="number" value={formData.height} onChange={e => setFormData({ ...formData, height: e.target.value })} />
                    </div>
                </div>

                <div className="form-group">
                    <label>Diet Preference</label>
                    <select value={formData.diet_preference} onChange={e => setFormData({ ...formData, diet_preference: e.target.value })}>
                        <option value="none">None</option>
                        <option value="vegan">Vegan</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="keto">Keto</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Health Goal</label>
                    <select value={formData.health_goal} onChange={e => setFormData({ ...formData, health_goal: e.target.value })}>
                        <option value="lose_weight">Lose Weight</option>
                        <option value="maintain">Maintain Weight</option>
                        <option value="gain_muscle">Gain Muscle</option>
                    </select>
                </div>
                
                <button type="submit" className="btn-primary">Register</button>
                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </form>
        </div>
    );
};

export default Register;
