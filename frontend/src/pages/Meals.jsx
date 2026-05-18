import React, { useState, useEffect } from 'react';
import { Search, Filter, ChefHat, Plus } from 'lucide-react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await api.get('/recipes');
        setMeals(res.data);
      } catch (error) {
        console.error("Error fetching meals:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMeals();
  }, []);

  const handleLogMeal = async (recipeId) => {
    try {
      const today = new Date().toISOString().split('T')[0];
      await api.post('/meals', { recipe_id: recipeId, date: today, meal_type: 'lunch' });
      alert("Meal logged successfully!");
      navigate('/progress');
    } catch (error) {
      console.error("Error logging meal", error);
      alert("Error logging meal");
    }
  };

  return (
    <div className="main-content">
      <div className="banner">
        <h1 style={{ color: 'var(--theme-text-main)' }}>Meal Database</h1>
        <p style={{ color: 'var(--theme-text-muted)', fontSize: '1.1rem' }}>Browse thousands of meals & log them instantly</p>
      </div>

      <div className="card" style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', background: 'var(--input-bg)', border: '1px solid var(--theme-border)', borderRadius: '12px', padding: '0.5rem 1rem' }}>
          <Search size={20} color="var(--theme-text-muted)" style={{ marginRight: '0.5rem' }} />
          <input type="text" placeholder="Search meals..." style={{ border: 'none', background: 'transparent', width: '100%', outline: 'none', fontSize: '1rem', color: 'var(--theme-text-main)' }} />
        </div>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Search</button>
        <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Filter size={20} /> Filters
        </button>
      </div>

      <div style={{ borderBottom: '1px solid var(--theme-border)', marginBottom: '2rem', display: 'flex', gap: '2rem' }}>
        <button style={{ background: 'none', border: 'none', borderBottom: '2px solid var(--theme-primary)', padding: '0.5rem 0', fontWeight: 'bold', color: 'var(--theme-primary)', cursor: 'pointer' }}>All Meals ({meals.length})</button>
        <button style={{ background: 'none', border: 'none', padding: '0.5rem 0', fontWeight: 'bold', color: 'var(--theme-text-muted)', cursor: 'pointer' }}>Recommended (0)</button>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--theme-text-muted)' }}>Loading meals...</div>
      ) : meals.length === 0 ? (
        <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem', color: 'var(--theme-text-muted)' }}>
          <ChefHat size={48} style={{ opacity: 0.3, marginBottom: '1rem' }} />
          <p>No meals found. Try adjusting your filters.</p>
        </div>
      ) : (
        <div className="grid-4">
          {meals.map(meal => (
            <div key={meal.id} className="card glow-accent" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
              <div className="icon-circle" style={{ width: '40px', height: '40px', marginBottom: '1rem', color: 'var(--theme-accent)' }}>
                <ChefHat />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--theme-text-main)' }}>{meal.title}</h3>
              <p style={{ color: 'var(--theme-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1 }}>{meal.description}</p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--theme-border)', paddingTop: '1rem', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: '600' }}>
                <span style={{ color: 'var(--theme-danger)' }}>🔥 {meal.calories} kcal</span>
                <span style={{ color: 'var(--theme-secondary)' }}>🥩 {meal.protein}g</span>
              </div>
              
              <button onClick={() => handleLogMeal(meal.id)} className="btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%' }}>
                <Plus size={16} /> Log Meal
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Meals;
