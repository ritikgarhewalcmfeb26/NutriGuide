const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const { JWT_SECRET } = require('../middlewares/auth');

exports.register = async (req, res) => {
    const { name, email, password, age, weight, height, diet_preference, health_goal } = req.body;

    try {
        const [existingUser] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: "Email already in use" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const query = `
            INSERT INTO users (name, email, password, age, weight, height, diet_preference, health_goal)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [name, email, hashedPassword, age || null, weight || null, height || null, diet_preference || 'none', health_goal || 'maintain'];

        const [result] = await db.query(query, values);

        res.status(201).json({ message: "User registered successfully", userId: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (users.length === 0) return res.status(404).json({ message: "User not found" });

        const user = users[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '24h' });

        res.json({
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                diet_preference: user.diet_preference,
                health_goal: user.health_goal
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

exports.getProfile = async (req, res) => {
    try {
        const [users] = await db.query('SELECT id, name, email, role, age, weight, height, diet_preference, health_goal FROM users WHERE id = ?', [req.userId]);
        if (users.length === 0) return res.status(404).json({ message: "User not found" });
        res.json(users[0]);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

exports.updateProfile = async (req, res) => {
    const { name, age, weight, height, diet_preference, health_goal } = req.body;
    try {
        const query = `
            UPDATE users 
            SET name = COALESCE(?, name), 
                age = COALESCE(?, age), 
                weight = COALESCE(?, weight), 
                height = COALESCE(?, height), 
                diet_preference = COALESCE(?, diet_preference), 
                health_goal = COALESCE(?, health_goal)
            WHERE id = ?
        `;
        await db.query(query, [name, age, weight, height, diet_preference, health_goal, req.userId]);
        
        const [users] = await db.query('SELECT id, name, email, role, age, weight, height, diet_preference, health_goal FROM users WHERE id = ?', [req.userId]);
        res.json(users[0]);
    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
