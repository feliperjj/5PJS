const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Substitua pela sua senha
  database: 'diagnostico_db',
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado ao banco MySQL!');
});

module.exports = db;
