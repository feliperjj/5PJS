const express = require('express');
const router = express.Router();
const db = require('../database');

// Adicionar novo resultado
router.post('/add', (req, res) => {
  const { patient, result } = req.body;
  const query = 'INSERT INTO results (patient, result) VALUES (?, ?)';
  db.query(query, [patient, result], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ success: true, message: 'Resultado registrado!' });
  });
});

// Listar resultados
router.get('/', (req, res) => {
  const query = 'SELECT * FROM results';
  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

module.exports = router;
