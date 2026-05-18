const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

let sslConfig = null;
if (process.env.DB_SSL === 'true') {
    sslConfig = {
        rejectUnauthorized: true
    };
    const caPath = process.env.DB_SSL_CA || path.join(__dirname, 'isrgrootx1.pem');
    try {
        if (fs.existsSync(caPath)) {
            sslConfig.ca = fs.readFileSync(caPath);
        }
    } catch (err) {
        console.error('Warning: Failed to load SSL CA certificate from ' + caPath, err);
    }
}

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'pass@123',
    database: process.env.DB_NAME || 'nutriguide',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    ssl: sslConfig
});

module.exports = pool;

