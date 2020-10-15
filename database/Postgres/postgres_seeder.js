const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

var counter = 0;
var writer = csvWriter();

const dataGen = () => {
  writer.pipe(fs.createWriteStream('data.csv'));
  for (let i = 0; i < 1000; i++) {
    writer.write({
      id: counter++,
      word:  faker.lorem.word()
    })
  }

  writer.end()
  console.log('done')
}

dataGen();