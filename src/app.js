const express = require('express');
const cors = require('cors');
const itemsRoutes = require('./routes/items'); // Importa as rotas de items

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuração das rotas
app.use('/items', itemsRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
