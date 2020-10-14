
/* eslint-disable no-plusplus */
const faker = require('faker');
const axios = require('axios');
const path = require('path');
const fs = require('fs');


for (let i = 0; i < 1000; i++) {
  axios.get('https://loremflickr.com/json/320/240/food')
  .then((response) => {
    const image = response.data.file
    const imagePath = path.join(__dirname, '../image', `${i}.jpg`);
    axios({
      method: 'get',
      url: image,
      responseType: 'stream',
    })
      .then((response) => {
        response.data.pipe(fs.createWriteStream(imagePath));
      });
  })
}
