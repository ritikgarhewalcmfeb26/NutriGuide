import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../services/api';
import { Target, Activity, Apple, Award } from 'lucide-react';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [meals, setMeals] = useState([]);
    const [totalCalories, setTotalCalories] = useState(0);

    const fetchDashboardData = async () => {
        try {
            const today = new Date().toISOString().split('T')[0];
            const mealRes = await api.get(`/meals/daily?date=${today}`);
            setMeals(mealRes.data.meals);
            setTotalCalories(mealRes.data.totalCalories);
        } catch (error) {
            console.error("Error fetching dashboard data", error);
        }
    };

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const calorieGoal = 2000;
    const progressPercent = Math.min((totalCalories / calorieGoal) * 100, 100);

    let bmi = '--';
    if (user?.weight && user?.height) {
        const heightM = user.height / 100;
        bmi = (user.weight / (heightM * heightM)).toFixed(1);
    }

    const formatGoal = (goal) => {
        if (!goal) return 'Maintain Weight';
        return goal.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    };

    return (
        <div className="main-content">
            <div className="banner bg-green">
                <h1>Welcome back, {user?.name?.split(' ')[0] || user?.email?.split('@')[0]}! 👋</h1>
                <p>Here's your health overview for today</p>
            </div>

            <div className="grid-4">
                <div className="card">
                    <div style={{ width: '40px', height: '40px', background: '#dcfce7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                        <Target color="#10b981" />
                    </div>
                    <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--text-muted)' }}>DAILY CALORIES</p>
                    <h2 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>{totalCalories} <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>/ 2000</span></h2>
                </div>
                
                <div className="card">
                    <div style={{ width: '40px', height: '40px', background: '#f3e8ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                        <Activity color="#a855f7" />
                    </div>
                    <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--text-muted)' }}>BMI</p>
                    <h2 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>{bmi}</h2>
                </div>

                <div className="card">
                    <div style={{ width: '40px', height: '40px', background: '#ecfdf5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                        <Apple color="#10b981" />
                    </div>
                    <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--text-muted)' }}>MEALS LOGGED</p>
                    <h2 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>{meals.length} <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>today</span></h2>
                </div>

                <div className="card">
                    <div style={{ width: '40px', height: '40px', background: '#eff6ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                        <Activity color="#3b82f6" />
                    </div>
                    <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--text-muted)' }}>WEIGHT</p>
                    <h2 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>{user?.weight || '--'} <span style={{ fontSize: '1.2rem', color: 'var(--text-main)', fontWeight: 'bold' }}>kg</span></h2>
                </div>
            </div>

            <div className="card" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.1rem' }}>Today's Calorie Progress</h3>
                    <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>{Math.round(progressPercent)}%</span>
                </div>
                <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${progressPercent}%` }}></div>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '1rem' }}>{Math.max(calorieGoal - totalCalories, 0)} calories remaining</p>
            </div>

            <div className="card" style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Macronutrient Targets</h3>
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

            <div className="card">
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Health Insights</h3>
                <div style={{ background: '#ecfdf5', border: '1px solid #d1fae5', padding: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#065f46' }}>
                    <Award size={20} /> <strong>Fitness Goal:</strong> {formatGoal(user?.health_goal)}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
