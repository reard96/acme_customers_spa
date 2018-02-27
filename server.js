const express = require('express');
const path = require('path');
const app = express();
const db = require('./db');
const { Customer } = db.models;


app.use(express.static(__dirname));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/customers', (req, res, next) => {

});

app.delete('./api/customers/:customer', (req, res, next) => {
  customers = customers.filter(item => item !== req.params.item * 1);
  res.sendStatus(204);
})

app.get('/api/customers', (req, res, next) => {
  res.send(customers);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

db.sync()
  .then(() => db.seed());
