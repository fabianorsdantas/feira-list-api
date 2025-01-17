// src/app.js
const express = require('express');
const itemsRoutes = require('./routes/items');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/items', itemsRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// src/routes/items.js
const express = require('express');
const { addItem, getItems, getItemById } = require('../controllers/itemsController');

const router = express.Router();

// Add a new item
router.post('/', addItem);

// Get all items or filter by type
router.get('/', getItems);

// Get item by ID
router.get('/:id', getItemById);

module.exports = router;

// src/controllers/itemsController.js
let items = [];
let currentId = 1;

// Add a new item
function addItem(req, res) {
  const { name, quantity, type } = req.body;

  // Validation
  if (!name || !quantity || !type) {
    return res.status(422).json({ error: 'All fields are required: name, quantity, type.' });
  }

  const existingItem = items.find(item => item.name === name);
  if (existingItem) {
    return res.status(409).json({ error: 'Item with this name already exists.' });
  }

  const newItem = { id: currentId++, name, quantity, type };
  items.push(newItem);
  res.status(201).json(newItem);
}

// Get all items or filter by type
function getItems(req, res) {
  const { type } = req.query;

  if (type) {
    const filteredItems = items.filter(item => item.type === type);
    return res.json(filteredItems);
  }

  res.json(items);
}

// Get item by ID
function getItemById(req, res) {
  const { id } = req.params;
  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId) || parsedId <= 0) {
    return res.status(400).json({ error: 'ID must be a positive integer.' });
  }

  const item = items.find(item => item.id === parsedId);

  if (!item) {
    return res.status(404).json({ error: 'Item not found.' });
  }

  res.json(item);
}

module.exports = { addItem, getItems, getItemById };