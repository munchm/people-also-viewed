const express = require('express');
const { Client } = require('pg');

const connectionString = 'postgressql://@localhost:5432/people_also_viewed';

const pgdb = new Client({ connectionString });

pgdb.connect();

pgdb.query('SELECT * from reviews', (err, res) => {
  if (err) {
    console.log(err)
  } else {
    console.log(res)
  }
})

module.exports = { pgdb }