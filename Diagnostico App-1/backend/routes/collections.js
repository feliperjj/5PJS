const express = require('express');
const router = express.Router();
const db = require('../database');

// Criar nova coleta
router.post('/new', (req, res) => {
  const { name, details } = req.body;
  const query = 'INSERT INTO collections (name, details) VALUES (?, ?)';
  db.query(query, [name, details], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ success: true, message: 'Coleta registrada com sucesso!' });
  });
});

// Listar coletas
router.get('/', (req, res) => {
  const query = 'SELECT * FROM collections';
  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

module.exports = router;
