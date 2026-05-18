import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../services/api';
import { 
  Target, 
  Activity, 
  Apple, 
  Flame, 
  MapPin, 
  Thermometer, 
  Wind, 
  ShieldAlert,
  RotateCcw,
  TrendingUp
} from 'lucide-react';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [meals, setMeals] = useState([]);
    const [totalCalories, setTotalCalories] = useState(0);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
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
        fetchDashboardData();

        // Live clock
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    let bmi = '--';
    if (user?.weight && user?.height) {
        const heightM = user.height / 100;
        bmi = (user.weight / (heightM * heightM)).toFixed(1);
    }

    const timeString = currentTime.toLocaleTimeString('en-US', { hour12: false });

    return (
        <div className="main-content">
            {/* HERO BANNER */}
            <div className="banner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1>Welcome back, {user?.name?.split(' ')[0] || user?.email?.split('@')[0] || 'Owner'}! 👋</h1>
                    <p style={{ opacity: 0.9, fontSize: '1.1rem', fontWeight: '500', color: 'var(--theme-text-main)' }}>Here's your health overview for today</p>
                </div>
                <button className="btn-outline" style={{ color: 'var(--theme-text-main)', borderColor: 'var(--theme-border)', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--input-bg) !important' }}>
                    <RotateCcw size={16} /> Reset Today Log
                </button>
            </div>

            {/* LIVE STATS BAR */}
            <div className="card" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', padding: '1.5rem 2.5rem !important' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div>
                        <div style={{ color: 'var(--theme-accent)', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <div style={{ width: '6px', height: '6px', background: 'var(--theme-accent)', borderRadius: '50%' }}></div> LIVE
                        </div>
                        <div style={{ fontSize: '1.8rem', fontWeight: '800', fontFamily: 'monospace', letterSpacing: '-1px' }}>
                            {timeString.split(':')[0]}:{timeString.split(':')[1]}<span style={{ fontSize: '1rem', color: 'var(--theme-text-muted)' }}>:{timeString.split(':')[2]}</span>
                        </div>
                        <div style={{ fontSize: '0.65rem', color: 'var(--theme-text-muted)', fontWeight: 'bold', letterSpacing: '1px' }}>LOCAL TIME</div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div className="icon-circle">
                        <MapPin size={20} color="var(--theme-primary)" />
                    </div>
                    <div>
                        <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>Chhindwara</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--theme-text-muted)', fontWeight: 'bold', letterSpacing: '0.5px' }}>NEARBY HUB</div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div className="icon-circle">
                        <Thermometer size={20} color="var(--theme-danger)" />
                    </div>
                    <div>
                        <div style={{ fontWeight: '800', fontSize: '1.2rem' }}>33.2°C</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--theme-danger)', fontWeight: 'bold', letterSpacing: '0.5px' }}>CLEAR SKY</div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div className="icon-circle">
                        <Wind size={20} color="var(--theme-secondary)" />
                    </div>
                    <div>
                        <div style={{ fontWeight: '800', fontSize: '1.2rem' }}>12.6 <span style={{ fontSize: '0.8rem' }}>km/h</span></div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--theme-secondary)', fontWeight: 'bold', letterSpacing: '0.5px' }}>WIND FLOW</div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div className="icon-circle">
                        <ShieldAlert size={20} color="var(--theme-primary)" />
                    </div>
                    <div>
                        <div style={{ fontWeight: '800', fontSize: '1.2rem' }}>88</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--theme-text-muted)', fontWeight: 'bold', letterSpacing: '0.5px' }}>AIR QUALITY</div>
                    </div>
                </div>
            </div>

            {/* SUMMARY CARDS */}
            <div className="grid-4">
                <div className="card glow-primary" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '160px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div className="icon-circle">
                            <Target size={20} color="var(--theme-primary)" />
                        </div>
                    </div>
                    <div>
                        <p style={{ fontSize: '0.7rem', fontWeight: 'bold', color: 'var(--theme-text-muted)', letterSpacing: '0.5px', marginBottom: '0.5rem' }}>DAILY CALORIES</p>
                        <h2 style={{ fontSize: '2.2rem', fontWeight: '800' }}>{totalCalories} <span style={{ fontSize: '1rem', color: 'var(--theme-text-muted)', fontWeight: '600' }}>/ 2000</span></h2>
                    </div>
                </div>
                
                <div className="card glow-secondary" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '160px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div className="icon-circle">
                            <Activity size={20} color="var(--theme-secondary)" />
                        </div>
                    </div>
                    <div>
                        <p style={{ fontSize: '0.7rem', fontWeight: 'bold', color: 'var(--theme-text-muted)', letterSpacing: '0.5px', marginBottom: '0.5rem' }}>BMI</p>
                        <h2 style={{ fontSize: '2.2rem', fontWeight: '800' }}>{bmi}</h2>
                    </div>
                </div>

                <div className="card glow-accent" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '160px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div className="icon-circle">
                            <Apple size={20} color="var(--theme-accent)" />
                        </div>
                    </div>
                    <div>
                        <p style={{ fontSize: '0.7rem', fontWeight: 'bold', color: 'var(--theme-text-muted)', letterSpacing: '0.5px', marginBottom: '0.5rem' }}>MEALS LOGGED</p>
                        <h2 style={{ fontSize: '2.2rem', fontWeight: '800' }}>{meals.length} <span style={{ fontSize: '1rem', color: 'var(--theme-text-muted)', fontWeight: '600' }}>today</span></h2>
                    </div>
                </div>

                <div className="card glow-danger" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '160px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div className="icon-circle">
                            <Flame size={20} color="var(--theme-danger)" />
                        </div>
                    </div>
                    <div>
                        <p style={{ fontSize: '0.7rem', fontWeight: 'bold', color: 'var(--theme-text-muted)', letterSpacing: '0.5px', marginBottom: '0.5rem' }}>DAILY STREAK</p>
                        <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '0.2rem' }}>2 <span style={{ fontSize: '1rem', color: 'var(--theme-text-muted)', fontWeight: '600' }}>days</span></h2>
                        <p style={{ fontSize: '0.75rem', color: 'var(--theme-danger)', fontWeight: '600' }}>Log a meal to keep it! ⏳</p>
                    </div>
                </div>
            </div>

            {/* WEEKLY CALORIE TREND CHART SECTION */}
            <div className="card" style={{ minHeight: '300px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', fontSize: '1.1rem' }}>
                        <TrendingUp size={20} color="var(--theme-primary)" /> Weekly Calorie Trend
                    </div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--theme-text-muted)', letterSpacing: '0.5px' }}>
                        PAST 7 DAYS
                    </div>
                </div>
                
                <div style={{ width: '100%', height: '200px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', paddingBottom: '1rem', borderBottom: '1px dashed var(--theme-border)' }}>
                    {[1200, 1500, 1800, 1400, 1900, 2100, totalCalories || 100].map((cal, i) => (
                        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ 
                                width: '40%', 
                                height: `${(cal / 2500) * 100}%`, 
                                background: i === 6 ? 'var(--theme-primary)' : 'var(--theme-border-hover)',
                                borderRadius: '4px 4px 0 0',
                                transition: 'height 1s ease'
                            }}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
