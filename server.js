const express = require('express');
const bodyParser = require('body-parser');
const Database = require('better-sqlite3');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize database
const db = new Database('signups.db');

// Create table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS signups (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    signup_date DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

console.log('✅ Database initialized');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(__dirname));

// API endpoint to save email
app.post('/api/signup', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email format' });
  }

  try {
    const stmt = db.prepare('INSERT INTO signups (email) VALUES (?)');
    stmt.run(email);

    console.log(`📧 New signup: ${email}`);
    res.json({ success: true, message: 'Email saved successfully!' });
  } catch (error) {
    if (error.code === 'SQLITE_CONSTRAINT') {
      return res.status(409).json({ success: false, message: 'Email already registered' });
    }
    console.error('Error saving email:', error);
    res.status(500).json({ success: false, message: 'Error saving email' });
  }
});

// Admin endpoint to get all signups (with password protection)
app.post('/api/admin/signups', (req, res) => {
  const { password } = req.body;

  // Check password
  if (password !== 'snatchit') {
    return res.status(401).json({ success: false, message: 'Invalid password' });
  }

  try {
    const stmt = db.prepare('SELECT id, email, signup_date FROM signups ORDER BY signup_date DESC');
    const signups = stmt.all();

    res.json({ success: true, signups });
  } catch (error) {
    console.error('Error fetching signups:', error);
    res.status(500).json({ success: false, message: 'Error fetching signups' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Admin page: http://localhost:${PORT}/admin.html`);
});
