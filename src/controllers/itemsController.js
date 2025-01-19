// Dados em memória para armazenar os itens
let items = [];
let currentId = 1;

// Adiciona um novo item à lista
function addItem(req, res) {
  const { name, quantity, type } = req.body;

  // Validação dos campos
  if (!name || !quantity || !type) {
    return res.status(422).json({ error: 'Todos os campos são obrigatórios: nome, quantidade e tipo.' });
  }

  // Verifica se já existe um item com o mesmo nome
  const existingItem = items.find(item => item.name === name);
  if (existingItem) {
    return res.status(409).json({ error: 'O item com este nome já existe.' });
  }

  // Adiciona o novo item à lista
  const newItem = { id: currentId++, name, quantity, type };
  items.push(newItem);
  res.status(201).json(newItem);
}

// Obtém todos os itens ou filtra por tipo
function getItems(req, res) {
  const { type } = req.query;

  // Retorna itens filtrados por tipo, se especificado
  if (type) {
    const filteredItems = items.filter(item => item.type === type);
    return res.json(filteredItems);
  }

  // Retorna todos os itens
  res.json(items);
}

// Obtém um item específico pelo ID
function getItemById(req, res) {
  const { id } = req.params;
  const parsedId = parseInt(id, 10);

  // Verifica se o ID é válido
  if (isNaN(parsedId) || parsedId <= 0) {
    return res.status(400).json({ error: 'O ID precisa ser um número inteiro positivo.' });
  }

  // Procura o item pelo ID
  const item = items.find(item => item.id === parsedId);

  // Retorna erro caso o item não seja encontrado
  if (!item) {
    return res.status(404).json({ error: 'Item não encontrado.' });
  }

  res.json(item);
}

module.exports = { addItem, getItems, getItemById };
