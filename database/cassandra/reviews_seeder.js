const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

var reviewsWriter = csvWriter();
const numberOfRestaurants = 10000000;
const reviewsPerRestaurant = 4

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const avatars = []
const names = []
const paragraphs = []
for (let i = 0; i < 1000; i++) {
  avatars.push(faker.internet.avatar())
  names.push(faker.name.firstName())
  paragraphs.push(faker.lorem.paragraph())
}

const dataGen = () => {
  reviewsWriter.pipe(fs.createWriteStream('reviewsForCassandra.csv'));
  for (let i = 1; i <= numberOfRestaurants; i++) {
    for (let j = 0; j < reviewsPerRestaurant; j++) {
      const reviewsData = {
        reviewId: i * reviewsPerRestaurant + j,
        restaurantId: i,
        userName: names[Math.floor(Math.random()*1000)],
        avatar: avatars[Math.floor(Math.random()*1000)],
        date: `${months[Math.floor(Math.random()*12)]} ${2018 + Math.floor(Math.random()*3)}`,
        comment: paragraphs[Math.floor(Math.random()*1000)],
        individual_rating: (Math.floor(Math.random()*11)) / 2
      }
      reviewsWriter.write(reviewsData)
    }
    if(i%100000 === 0) {
      console.log(i/100000, '%')
    }
  }

  reviewsWriter.end()
  console.log('done')
}

dataGen();