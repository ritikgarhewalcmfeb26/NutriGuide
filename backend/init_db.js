const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function initDB() {
    try {
        console.log('Connecting to MySQL...');
        
        let sslConfig = null;
        if (process.env.DB_SSL === 'true') {
            sslConfig = {
                rejectUnauthorized: true
            };
            const caPath = process.env.DB_SSL_CA || path.join(__dirname, 'config', 'isrgrootx1.pem');
            try {
                if (fs.existsSync(caPath)) {
                    sslConfig.ca = fs.readFileSync(caPath);
                }
            } catch (err) {
                console.error('Warning: Failed to load SSL CA certificate from ' + caPath, err);
            }
        }

        const connection = await mysql.createConnection({
            host: process.env.DB_HOST || 'localhost',
            port: parseInt(process.env.DB_PORT, 10) || 3306,
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || 'pass@123',
            ssl: sslConfig,
            multipleStatements: true
        });

        console.log('Connected! Reading SQL script...');
        const sqlPath = path.join(__dirname, 'db_setup.sql');
        const sqlScript = fs.readFileSync(sqlPath, 'utf8');

        console.log('Executing SQL script...');
        await connection.query(sqlScript);

        console.log('Database and tables initialized successfully!');
        
        // Let's insert an admin user if not exists
        await connection.query('USE nutriguide;');
        const [rows] = await connection.query('SELECT * FROM users WHERE email = ?', ['admin@nutriguide.com']);
        if (rows.length === 0) {
            const bcrypt = require('bcryptjs');
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash('admin123', salt);
            
            await connection.query(
                'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
                ['Admin User', 'admin@nutriguide.com', hashedPassword, 'admin']
            );
            console.log('Admin user created (admin@nutriguide.com / admin123)');
        }

        await connection.end();
    } catch (err) {
        console.error('Error initializing database:', err);
    }
}

initDB();
