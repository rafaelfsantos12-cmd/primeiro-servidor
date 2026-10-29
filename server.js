import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Bem-vindo à Central de Informações da Escola!');
});

app.get('/status', (req, res) => {
  res.json({
    status: 'online'
  });
});

app.get('/escola', (req, res) => {
  res.json({
    nome: 'Escola Técnica Futuro',
    cidade: 'São Paulo',
    tipo: 'Ensino Técnico'
  });
});

app.get('/cursos', (req, res) => {
  res.json([
    { id: 1, nome: 'Desenvolvimento de Sistemas' },
    { id: 2, nome: 'Redes de Computadores' },
    { id: 3, nome: 'Administração' }
  ]);
});

app.get('/professor', (req, res) => {
  res.json({
    nome: 'Carlos Oliveira',
    disciplina: 'Programação Web'
  });
});

app.get('/ajuda', (req, res) => {
  res.send(
    'Rotas disponíveis:\n' +
    '/ - Página inicial\n' +
    '/status - Estado do servidor\n' +
    '/escola - Dados da escola\n' +
    '/cursos - Lista de cursos\n' +
    '/professor - Dados do professor\n' +
    '/ajuda - Orientações do sistema\n' +
    '/requisicao - Dados da requisição'
  );
});

app.get('/requisicao', (req, res) => {
  res.json({
    metodo: req.method,
    caminho: req.path,
    mensagem: 'Solicitação recebida com sucesso.'
  });
});

app.listen(PORT, () => {
  console.log('Servidor funcionando na porta 3000!');
});
