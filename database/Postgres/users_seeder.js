const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

var usersForPg = csvWriter();

const numberOfUsers = 1000;

const dataGen = () => {
  usersForPg.pipe(fs.createWriteStream('usersForPg.csv'));
    for (let i = 0; i < numberOfUsers; i++) {
      const userData = {
        userId: i,
        avatar: faker.internet.avatar(),
        name: faker.name.firstName()
      }
      usersForPg.write(userData)
    }

  usersForPg.end()
  console.log('done')
}

dataGen();