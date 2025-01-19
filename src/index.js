// src/index.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Armazenamento de dados (na memória)
let items = [];
let currentId = 1;

// Routes
// POST /items - Adicionar um novo item
app.post("/items", (req, res) => {
    const { name, quantity, type } = req.body;

    // Validação
    if (!name || !quantity || !type) {
        return res.status(422).json({ error: "Todos os campos são obrigatórios: nome, quantidade e tipo." });
    }

    const existingItem = items.find(item => item.name === name);
    if (existingItem) {
        return res.status(409).json({ error: "O item com este nome já existe." });
    }

    const newItem = { id: currentId++, name, quantity, type };
    items.push(newItem);
    res.status(201).json(newItem);
});

// GET /items - Obter todos os itens ou filtrar por tipo
app.get("/items", (req, res) => {
    const { type } = req.query;

    if (type) {
        const filteredItems = items.filter(item => item.type === type);
        return res.json(filteredItems);
    }

    res.json(items);
});

// GET /items/:id - Obter item por ID
app.get("/items/:id", (req, res) => {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);

    if (isNaN(parsedId) || parsedId <= 0) {
        return res.status(400).json({ error: "ID must be a positive integer." });
    }

    const item = items.find(item => item.id === parsedId);

    if (!item) {
        return res.status(404).json({ error: "Item not found." });
    }

    res.json(item);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor em execução em http://localhost:${PORT}`);
});

