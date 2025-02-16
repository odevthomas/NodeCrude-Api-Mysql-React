# NodeCrud API

## 📋 Descrição

NodeCrud API é um projeto completo de API REST para gerenciamento de usuários, implementando operações CRUD (Create, Read, Update, Delete). O projeto foi desenvolvido com foco em simplicidade e boas práticas.

## 🛠 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **MySQL**
- **Nodemon**
- **Dotenv**
- **Cors**
- **Body-parser**

## 📁 Estrutura do Projeto

```
/api
├── controllers/
│   └── user.js
├── routes/
│   └── user.js
├── config/
│   └── db.js
├── .env
├── index.js
└── server.js
```

## 🚀 Configuração e Instalação

### Pré-requisitos

- Node.js instalado
- MySQL instalado e configurado
- NPM ou Yarn

### 1. Configuração do Banco de Dados

```sql
CREATE DATABASE nodemysql;

USE nodemysql;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. Instalação das Dependências

```bash
npm install express mysql2 nodemon dotenv cors body-parser
# ou
yarn add express mysql2 nodemon dotenv cors body-parser
```

### 3. Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```ini
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=nodemysql
PORT=8800
```

## 📦 Estrutura de Arquivos

### 1. `server.js`

```javascript
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');

require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/api', userRoutes);

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
```

### 2. `config/db.js`

```javascript
const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = connection.promise();
```

### 3. `routes/user.js`

```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/usuarios', userController.createUser);
router.get('/usuarios', userController.getUsers);
router.get('/usuarios/:id', userController.getUserById);
router.put('/usuarios/:id', userController.updateUser);
router.delete('/usuarios/:id', userController.deleteUser);

module.exports = router;
```

### 4. `controllers/user.js`

```javascript
const db = require('../config/db');

exports.createUser = async (req, res) => {
    try {
        const { nome, email, password } = req.body;
        const [result] = await db.execute(
            'INSERT INTO usuarios (nome, email, password) VALUES (?, ?, ?)',
            [nome, email, password]
        );
        res.status(201).json({ message: 'Usuário criado com sucesso', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Implementar os demais métodos (getUsers, getUserById, updateUser, deleteUser) aqui...
```

## 🚀 Executando o Projeto

### Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

### Produção

```bash
npm start
# ou
yarn start
```

## 📡 Endpoints da API

| Método | Rota                | Descrição                  |
|--------|---------------------|----------------------------|
| POST   | /api/usuarios       | Criar novo usuário         |
| GET    | /api/usuarios       | Listar todos usuários      |
| GET    | /api/usuarios/:id   | Buscar usuário por ID      |
| PUT    | /api/usuarios/:id   | Atualizar usuário          |
| DELETE | /api/usuarios/:id   | Deletar usuário            |

## 📝 Exemplos de Requisições

### Criar Usuário

```bash
POST /api/usuarios
Content-Type: application/json

{
    "nome": "João Silva",
    "email": "joao@email.com",
    "password": "senha123"
}
```

### Atualizar Usuário

```bash
PUT /api/usuarios/1
Content-Type: application/json

{
    "nome": "João Silva Atualizado",
    "email": "joao.novo@email.com",
    "password": "novaSenha123"
}
```

