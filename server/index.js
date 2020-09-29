const express = require('express')
const app = express()
const port = 3000
const db = require('../database')
const path = require('path')

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/getRestaurants', (req, res) => {
  db.getRestaurants((error, result) => {
    error ? res.status(400).send() : res.status(201).send(result);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});