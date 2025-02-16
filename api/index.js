// No seu arquivo index.js
import express from 'express';
import cors from 'cors';
import { db } from './db.js';

const app = express();

app.use(express.json());
app.use(cors());

// Listar todos os usuários
app.get('/usuarios', (req, res) => {
  const q = 'SELECT * FROM usuarios';
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Criar usuário
app.post('/usuarios', (req, res) => {
  const q =
    'INSERT INTO usuarios (`nome`, `email`, `fone`, `data_nascimento`) VALUES (?)';
  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json('Usuário criado com sucesso.');
  });
});

app.listen(8800, () => {
  console.log('Servidor rodando na porta 8800');
});
