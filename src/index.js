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

