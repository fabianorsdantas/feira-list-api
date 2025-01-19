# Feira List API 🛒

## Descrição

A **Feira List API** é uma aplicação desenvolvida com Node.js e Express para gerenciar uma lista de compras. Essa API foi criada para facilitar a organização e o controle de itens necessários, ajudando os usuários a evitar gastos desnecessários e garantindo que não se esqueçam de itens importantes.

A API é simples, funcional e utiliza armazenamento em memória para gerenciar os dados de maneira temporária. É ideal para aprendizado e prototipagem de APIs REST.

---

## **Funcionalidades**

A API suporta as seguintes operações:

1. **Adicionar itens à lista de compras (POST /items)**  
   - Permite registrar itens na lista.
   - Valida os campos obrigatórios: `name`, `quantity`, `type`.
   - Garante que não haja duplicação de itens com o mesmo nome.
   - Retorna o item cadastrado com um `id` sequencial.

2. **Listar todos os itens ou filtrar por tipo (GET /items)**  
   - Retorna todos os itens cadastrados.
   - Permite filtrar os itens por tipo utilizando uma query string (e.g., `?type=fruta`).

3. **Buscar item por ID (GET /items/:id)**  
   - Permite obter um item específico pelo `id`.
   - Valida que o ID seja um número inteiro positivo.
   - Retorna mensagens apropriadas caso o item não seja encontrado.

---

## **Tecnologias Utilizadas**

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express.js**: Framework minimalista e flexível para criação de APIs.
- **CORS**: Middleware para permitir requisições de diferentes origens.
- **Thunder Client/Postman**: Ferramentas para testes manuais da API.

---

## **Como Executar**

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/fabianorsdantas/feira-list-api.git
   
   cd feira-list-api

2. **Instale as dependências**:
   npm install

3. **Inicie o servidor**:
    npm run dev

O servidor estará rodando em http://localhost:5000.

## **Exemplos de Requisições**

1. **Adicionar um item (POST /items)**

    Corpo da requisição (JSON):
    {
        "name": "Maçã",
        "quantity": 5,
        "type": "Fruta"
    }

    Resposta (201):
    {
        "id": 1,
        "name": "Maçã",
        "quantity": 5,
        "type": "Fruta"
    }

2. **Listar todos os itens (GET /items)**

    Resposta (200):
    [
        {
            "id": 1,
            "name": "Maçã",
            "quantity": 5,
            "type": "Fruta"
        }
    ]

3. **Filtrar itens por tipo (GET /items?type=Fruta)**

    Resposta (200):
    [
        {
            "id": 1,
            "name": "Maçã",
            "quantity": 5,
            "type": "Fruta"
        }
    ]

4. **Buscar item por ID (GET /items/:id)**

    Exemplo (GET /items/1):

    Resposta (200):
    {
        "id": 1,
        "name": "Maçã",
        "quantity": 5,
        "type": "Fruta"
    }
    
    Erro (404):
    {
        "error": "Item não encontrado."
    }

## **Contribuições**

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou criar pull requests.

## **Licença**

Este projeto é de código aberto e está licenciado sob os termos da MIT License.

## **Contato**

Para dúvidas ou sugestões, entre em contato:
fabianorsdantas@gmail.com








