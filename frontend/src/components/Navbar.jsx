import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  LayoutDashboard, 
  Utensils, 
  Target, 
  Cpu, 
  LineChart, 
  ShieldAlert,
  Flame,
  Diamond,
  Sun,
  Moon
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    // Apply theme on mount and when changed
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={16} /> },
    { name: 'Meals', path: '/meals', icon: <Utensils size={16} /> },
    { name: 'Progress', path: '/progress', icon: <Target size={16} /> },
    { name: 'AI Assistant', path: '#', icon: <Cpu size={16} /> },
    { name: 'Analytics', path: '/analytics', icon: <LineChart size={16} /> },
    { name: 'Admin Hub', path: '/admin', icon: <ShieldAlert size={16} /> },
  ];

  if (!user) return null;

  return (
    <nav className="navbar">
      <Link to="/dashboard" className="nav-brand">
        <div style={{ background: 'var(--theme-primary)', padding: '0.3rem', borderRadius: '8px', display: 'flex' }}>
          <ShieldCheck size={24} color="var(--theme-text-inverse)" />
        </div>
        <span>NutriGuide</span>
      </Link>
      
      <div className="nav-links">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path || (link.name === 'Dashboard' && location.pathname === '/');
          return (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${isActive ? 'nav-active' : ''}`}
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
            >
              {link.icon} {link.name}
            </Link>
          );
        })}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <div className="nav-pill" style={{ borderColor: 'var(--theme-border-hover)' }}>
          <Flame size={14} color="var(--theme-accent)" /> <span style={{color: 'var(--theme-accent)'}}>2</span>
        </div>
        <div className="nav-pill" style={{ borderColor: 'var(--theme-border-hover)' }}>
          <Diamond size={14} color="#a855f7" /> <span style={{color: '#a855f7'}}>16692</span>
        </div>
        
        {/* THEME TOGGLE */}
        <div className="nav-pill" onClick={toggleTheme} style={{ padding: '0.5rem', cursor: 'pointer', borderColor: 'var(--theme-border-hover)' }} title="Toggle Theme">
          {theme === 'dark' ? <Sun size={16} color="var(--theme-primary)" /> : <Moon size={16} color="var(--theme-primary)" />}
        </div>
        
        <div className="nav-pill-owner" onClick={handleLogout} title="Click to logout" style={{ borderColor: 'var(--theme-border-hover)' }}>
          <div className="nav-owner-circle">
             <div style={{ width: '8px', height: '8px', background: 'var(--theme-text-inverse)', borderRadius: '50%' }}></div>
          </div>
          <span style={{ paddingRight: '0.5rem', fontWeight: 'bold' }}>
             {user.name ? user.name.split(' ')[0] : (user.email ? user.email.split('@')[0] : 'owner')}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
