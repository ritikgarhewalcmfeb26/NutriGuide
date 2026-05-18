import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Utensils, LayoutDashboard, LineChart, Target, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Meals', path: '/meals', icon: <Utensils size={20} /> },
    { name: 'Progress', path: '/progress', icon: <Target size={20} /> },
    { name: 'Analytics', path: '/analytics', icon: <LineChart size={20} /> },
    { name: 'Profile', path: '/profile', icon: <User size={20} /> },
  ];

  if (!user) return null;

  return (
    <nav className="navbar">
      <Link to="/dashboard" className="nav-brand">
        <Utensils size={28} /> NutriGuide AI
      </Link>
      
      <div className="nav-links">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
          >
            {link.icon} {link.name}
          </Link>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {user.email ? user.email[0].toUpperCase() : 'U'}
          </div>
          {user.email ? user.email.split('@')[0] : 'User'}
        </div>
        <button onClick={handleLogout} className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}>
          <LogOut size={16} /> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
