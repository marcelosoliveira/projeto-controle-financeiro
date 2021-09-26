const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const data = require('./data/db.json');

app.use(cors());
app.use(express.json());

let CIDADES = data.cidades;

app.route('/api/cidades').get((_request, response) => {
  response.send(CIDADES);
});

app.route('/api/cidades').post((request, response) => {
  let cidade = request.body;
  const firstId = CIDADES ? Math.max.apply(null, CIDADES.map(cidadeIterator => cidadeIterator.id)) + 1 : 1;
  cidade.id = firstId;
  CIDADES.push(cidade);


  response.status(201).send(cidade);
});

app.route('/api/cidades/:id').put((request, response) => {
  const cidadeId = +request.params['id'];
  const cidade = request.body;

  const index = CIDADES.findIndex(cidadeIterator => cidadeIterator.id === cidadeId);
  CIDADES[index] = { name: cidade.name, id: cidadeId };

  response.status(200).send(cidade);
});

app.route('/api/cidades/:id').get((request, response) => {
  const cidadeId = +request.params['id'];

  response.status(200).send(CIDADES.find(cidadeIterator => cidadeIterator.id === cidadeId));
});

app.route('/api/cidades/:id').delete((request, response)=> {
  const cidadeId = +request.params['id'];
  CIDADES = CIDADES.filter(cidadeIterator => cidadeIterator.id !== cidadeId);

  response.status(204).send({});
});

app.listen(3000, () => {
  console.log('Server Started!');
});
