const express = require('express');
const router = express.Router();
const db = require('../database');

// Login do usuário
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length > 0) res.json({ success: true, user: results[0] });
    else res.json({ success: false, message: 'Credenciais inválidas' });
  });
});

module.exports = router;
