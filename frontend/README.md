# NodeCrud API

## 📋 Descrição

NodeCrud API é um projeto completo de API REST para gerenciamento de usuários, implementando operações CRUD (Create, Read, Update, Delete). O projeto foi desenvolvido com foco em simplicidade e boas práticas.

## 🛠 Tecnologias Utilizadas

- Node.js
- Express.js
- MySQL
- Nodemon
- Dotenv
- Cors
- Body-parser

## 📁 Estrutura do Projeto 

- **api**: Contém o código da API.
- **public**: Contém o código do frontend.
- **.env**: Contém as variáveis de ambiente.
- **package.json**: Contém as dependências do projeto.
- **README.md**: Contém as informações do projeto.

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

npm install express mysql2 nodemon dotenv cors body-parser
# ou
yarn add express mysql2 nodemon dotenv cors body-parser     

npm install express mysql2 nodemon dotenv cors body-parser
# ou
yarn add express mysql2 nodemon dotenv cors body-parser     


c:\Users\devel\OneDrive\Pictures\Printdecodigos\codeimage-snippet_16.png
