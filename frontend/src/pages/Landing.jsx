import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="main-content" style={{ maxWidth: '1400px', padding: '3rem 2rem' }}>
            {/* GUEST HEADER */}
            <header className="navbar" style={{
                borderRadius: '16px',
                marginBottom: '3rem',
                width: '100%',
                background: 'rgba(255, 255, 255, 0.02) !important',
                border: '1px solid rgba(255,255,255,0.08) !important'
            }}>
                <Link to="/" className="nav-brand" style={{ color: '#ffffff', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                    <span style={{ fontWeight: '800', letterSpacing: '-0.5px' }}>NutriGuide AI</span>
                </Link>
                <div>
                    <Link to="/login" className="btn-outline" style={{ textDecoration: 'none', padding: '0.5rem 1.5rem !important', fontSize: '0.95rem', borderRadius: '10px' }}>
                        Sign In
                    </Link>
                </div>
            </header>

            {/* HERO SECTION */}
            <div className="card banner bg-green" style={{
                background: 'radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.4) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), rgba(255,255,255,0.02)',
                padding: '5rem 3rem !important',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.5rem',
                border: '1px solid rgba(255,255,255,0.1)'
            }}>
                <div style={{
                    background: 'rgba(16, 185, 129, 0.15)',
                    padding: '0.6rem 1.5rem',
                    borderRadius: '30px',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: '#34d399',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    marginBottom: '1rem'
                }}>
                    ✨ AI-Powered Health Companion
                </div>
                
                <h1 style={{
                    fontSize: '4rem',
                    fontWeight: '800',
                    lineHeight: '1.15',
                    color: '#ffffff',
                    maxWidth: '900px',
                    textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    letterSpacing: '-1.5px'
                }}>
                    Transform Your Health with <span style={{
                        background: 'linear-gradient(90deg, #34d399, #60a5fa)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>NutriGuide</span>
                </h1>
                
                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-muted)',
                    maxWidth: '650px',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                }}>
                    Track your daily nutrition, log meals, monitor custom hydration goals, and visualize your fitness journey—all wrapped in an ultra-premium glassmorphism dashboard.
                </p>
                
                <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Link to="/register" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block', fontSize: '1.1rem', padding: '1rem 2.5rem !important' }}>
                        Start Free Journey
                    </Link>
                    <Link to="/login" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block', fontSize: '1.1rem', padding: '1rem 2.5rem !important' }}>
                        Sign In to Account
                    </Link>
                </div>
            </div>

            {/* STATISTICS REFRACTIVE CONTAINER */}
            <div className="grid-4" style={{ margin: '4rem 0' }}>
                <div className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem !important' }}>
                    <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#10b981', marginBottom: '0.5rem' }}>10k+</h3>
                    <p style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Active Users Worldwide</p>
                </div>
                <div className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem !important' }}>
                    <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#60a5fa', marginBottom: '0.5rem' }}>5M+</h3>
                    <p style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Healthy Meals Tracked</p>
                </div>
                <div className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem !important' }}>
                    <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#c084fc', marginBottom: '0.5rem' }}>99.8%</h3>
                    <p style={{ color: 'var(--text-muted)', fontWeight: '600' }}>User Goal Accomplished</p>
                </div>
                <div className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem !important' }}>
                    <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#f472b6', marginBottom: '0.5rem' }}>24/7</h3>
                    <p style={{ color: 'var(--text-muted)', fontWeight: '600' }}>AI Hydration Reminders</p>
                </div>
            </div>

            {/* FEATURES TITLE */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.5px' }}>
                    Designed For a Vibrant Lifestyle
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '0.5rem' }}>
                    Experience tools that adapt to your exact lifestyle, fully responsive and beautifully fast.
                </p>
            </div>

            {/* FEATURES GRID */}
            <div className="grid-2" style={{ gap: '2.5rem' }}>
                {/* Meal Tracking */}
                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{
                        background: 'rgba(16, 185, 129, 0.12)',
                        padding: '1rem',
                        borderRadius: '16px',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#10b981'
                    }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                        </svg>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.5rem' }}>Dynamic Nutrition Tracker</h4>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                            Log your breakfast, lunch, and dinner calories inside our premium database. Keep a detailed history of your calories, fats, carbs, and proteins effortlessly.
                        </p>
                    </div>
                </div>

                {/* Hydration Tracker */}
                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{
                        background: 'rgba(59, 130, 246, 0.12)',
                        padding: '1rem',
                        borderRadius: '16px',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#60a5fa'
                    }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z"/>
                        </svg>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.5rem' }}>Interactive Water Logger</h4>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                            Stay fully hydrated with our single-click interactive water logging card. Keep track of your daily intake in real-time, completely backed by automated notifications.
                        </p>
                    </div>
                </div>

                {/* Progress Log */}
                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{
                        background: 'rgba(168, 85, 247, 0.12)',
                        padding: '1rem',
                        borderRadius: '16px',
                        border: '1px solid rgba(168, 85, 247, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#c084fc'
                    }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 20v-8M6 20V4M18 20v-4"/>
                        </svg>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.5rem' }}>Progress Milestone Charts</h4>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                            Record your body weight, neck size, waist size, and hips regularly. Watch your visual transformations over time with our custom metrics logging history.
                        </p>
                    </div>
                </div>

                {/* Interactive Dashboards */}
                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{
                        background: 'rgba(244, 114, 182, 0.12)',
                        padding: '1rem',
                        borderRadius: '16px',
                        border: '1px solid rgba(244, 114, 182, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#f472b6'
                    }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <line x1="9" y1="3" x2="9" y2="21"/>
                            <line x1="15" y1="3" x2="15" y2="21"/>
                            <line x1="3" y1="9" x2="21" y2="9"/>
                            <line x1="3" y1="15" x2="21" y2="15"/>
                        </svg>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.5rem' }}>Advanced Analytics</h4>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                            Get precise breakdowns of your calorie intakes, weekly averages, and water logs through a high-definition dashboard, built to keep you on your perfect path.
                        </p>
                    </div>
                </div>
            </div>

            {/* CALL TO ACTION */}
            <div className="card" style={{
                marginTop: '5rem',
                textAlign: 'center',
                padding: '4rem 2rem !important',
                background: 'rgba(255,255,255,0.01)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px'
            }}>
                <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff', marginBottom: '1rem' }}>Ready to Elevate Your Wellness?</h3>
                <p style={{ color: 'var(--text-muted)', maxWidth: '550px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
                    Join thousands of health enthusiasts tracking their nutrition securely inside TiDB. Build your perfect routine today.
                </p>
                <Link to="/register" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block', fontSize: '1.1rem', padding: '1rem 2.5rem !important' }}>
                    Get Started Instantly
                </Link>
            </div>
        </div>
    );
};

export default Landing;
