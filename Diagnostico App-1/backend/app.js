const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const collectionRoutes = require('./routes/collections');
const resultRoutes = require('./routes/results');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/users', userRoutes);
app.use('/collections', collectionRoutes);
app.use('/results', resultRoutes);

// Servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
