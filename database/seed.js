const db = require('./index');
const faker = require('faker');

for (let i = 1; i <= 100; i++) {

  const randBizName = faker.company.companyName();

  const randReviews = faker.random.number({
    min: 3.5,
    max: 5,
    precision: 0.5
  });

  const randReviewsNum = faker.random.number({
    min: 200,
    max: 1500
  });

  const randPrice = faker.random.number({
    min: 1,
    max: 3
  });
  const category = ['Korean', 'Wine Bars', 'Noodles', 'American(Traditional)'];
  const randCategory = category[faker.random.number({
    min: 0,
    max: category.length - 1
  })];
  const randDisplayImgURL = `https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/${faker.random.number({ min: 1, max: 35 })}.jpg`;
  const booleanArr = [true, false];
  const randHeart = booleanArr[faker.random.number({ min: 0, max: 1 })];
  const randRated = booleanArr[faker.random.number({ min: 0, max: 1 })];


  db.Restaurant.create({
    name: randBizName,
    reviews: randReviews,
    reviewsNum: randReviewsNum,
    price: randPrice,
    category: randCategory,
    displayImgURL: randDisplayImgURL,
    heart: randHeart,
    super_rated: randRated
  })
};


