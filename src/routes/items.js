const express = require('express');
const { addItem, getItems, getItemById } = require('../controllers/itemsController');

const router = express.Router();

// Rota para adicionar um item
router.post('/', addItem);

// Rota para obter todos os itens ou filtrar por tipo
router.get('/', getItems);

// Rota para obter um item específico por ID
router.get('/:id', getItemById);

module.exports = router;
