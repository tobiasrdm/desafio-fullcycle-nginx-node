const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

const dbRepository = require('./db-repository');
dbRepository.inicializaDb()
  .then('Tabela inicializada com sucesso')
  .catch((erro) => {
    console.error(erro);
  });

// App
const app = express();
app.get('/', async (req, res) => {
  try {
    const resultado = await dbRepository.consultaPessoas()
    const nomes = resultado.map((row) => row.name);
    const itens = nomes.map((nome) => `<li>${nome}</li>`)
    const html = `
    <h1>Full Cycle Rocks!</h1>
    <ul>
    ${itens.join('\n')}
    </ul>
  `
    res.send(html);
  } catch (error) {
    console.error(error)
    res.send(error)
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});