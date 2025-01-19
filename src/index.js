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

