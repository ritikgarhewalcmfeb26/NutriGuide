const db = require('../config/db');

exports.getAllRecipes = async (req, res) => {
    try {
        const [recipes] = await db.query('SELECT * FROM recipes ORDER BY created_at DESC');
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

exports.getRecommendations = async (req, res) => {
    try {
        const [users] = await db.query('SELECT diet_preference FROM users WHERE id = ?', [req.userId]);
        if (users.length === 0) return res.status(404).json({ message: "User not found" });

        const preference = users[0].diet_preference;
        
        let query = 'SELECT * FROM recipes';
        let params = [];
        
        if (preference && preference !== 'none') {
            query += ' WHERE diet_tag = ?';
            params.push(preference);
        }
        
        query += ' ORDER BY created_at DESC LIMIT 10';

        const [recipes] = await db.query(query, params);
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

exports.createRecipe = async (req, res) => {
    const { title, description, ingredients, instructions, calories, protein, carbs, fat, diet_tag, image_url } = req.body;

    try {
        const query = `
            INSERT INTO recipes (title, description, ingredients, instructions, calories, protein, carbs, fat, diet_tag, image_url, created_by)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            title, description, JSON.stringify(ingredients), instructions, 
            calories, protein, carbs, fat, diet_tag, image_url, req.userId
        ];

        const [result] = await db.query(query, values);
        res.status(201).json({ message: "Recipe created successfully", recipeId: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create recipe", error: error.message });
    }
};

exports.deleteRecipe = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.query('DELETE FROM recipes WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        res.json({ message: "Recipe deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
