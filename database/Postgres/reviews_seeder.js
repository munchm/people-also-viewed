const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

var reviewsForPg = csvWriter();

const numberOfRestaurants = 10000000;
const reviewsPerRestaurant = 4;
const months = ['January', 'Februrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const reviews = []

for (let i = 0; i < 1000; i++) {
  reviews.push(faker.lorem.paragraph())
}

const dataGen = () => {
  reviewsForPg.pipe(fs.createWriteStream('reviewsForPg_2.csv'));
  for (let i = 1; i <= numberOfRestaurants; i++) {
    for (let j = 0; j < reviewsPerRestaurant; j++) {
      const reviewsData = {
        reviewId: i * reviewsPerRestaurant + j,
        restaurantId: i,
        userId: Math.floor(Math.random()*1000),
        date: `${months[Math.floor(Math.random()*12)]} ${2018 + Math.floor(Math.random()*3)}`,
        comment: reviews[Math.floor(Math.random()*reviews.length)],
        individual_rating: (Math.floor(Math.random()*11)) / 2
      }
      reviewsForPg.write(reviewsData)
    }
    if (i%100000===0) {
      console.log(i/1000000 + '%')
    }
  }

  reviewsForPg.end()
  console.log('done')
}

dataGen();