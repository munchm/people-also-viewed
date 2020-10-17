const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

var restaurantsForPg = csvWriter();

const numberOfRestaurants = 10000000
const restaurantEndings = ['Cafe', 'Restaurant', 'Steak House', 'Pizza House', 'Diner', 'Eatery', 'Joint', 'Canteen', 'BBQ', 'Chophouse', 'Bar', 'Bistro', 'Sandwiches']
const categories = ['Hot Dogs, Korean', 'Korean, Gastropubs', 'Chicken Wings, Pizza', 'Korean, BBQ', 'Korean', 'Caterers, BBQ', 'Korean, BBQ, Soup', 'Korean, Soup', 'Vietnamese, Soup', 'Noodles', 'Vietnamese, Soup', 'Vietnamese', 'Vietnamese', 'Seafood, Vietnamese', 'Bubble Tea, Juice Bars', 'Tea, Bubble Tea, Juice Bars', 'Coffee & Tea, Macarons', 'Bubble Tea', 'Coffee & Tea', 'Cafes, Bubble Tea', 'Taiwanese, Noodles', 'Ramen Zuru', 'Ramen, Pan Asian', 'Sushi Bars, Ramen', 'Japanese, Sushi Bars', 'Sushi Bars, Asian Fusion', 'Japanese, BBQ', 'Japanese, Hot Pot', 'Japanese, Steakhouses', 'Japanese, Hot Pot', 'Japanese, Comfort Food', 'Cajun, Seafood', 'Seafood, Soul Food', 'Cajun/Creole, Seafood', 'Cajun/Creole, Thai', 'Chicken Wings, Seafood', 'Cocktail Bars', 'Cocktail Bars', 'Tiki Bars', 'Mexican, American', 'Wine Bars', 'American, Steakhouses', 'Steakhouses', 'Seafood', 'Seafood, Cajun', 'Seafood, American', 'American', 'Gastropubs', 'Burgers', 'Break & Brunch, Diners'];

const dataGen = () => {
  restaurantsForPg.pipe(fs.createWriteStream('restaurantsForPg.csv'));
  for (let i = 1; i <= numberOfRestaurants; i++) {
    const restaurantData = {
      restaurantId: i,
      name: `${faker.name.firstName()}'s ${restaurantEndings[Math.floor(Math.random()*13)]}`,
      price: Math.ceil(Math.random()*3),
      category: categories[Math.floor(Math.random()*50)],
      displayImgURL: `https://hrsf130-restaurants.s3-us-west-1.amazonaws.com/${Math.floor(Math.random()*1000)}.jpg`,
      heart: false,
      super_rated: Math.random() > .8
    }
    restaurantsForPg.write(restaurantData)
  }

  restaurantsForPg.end()
  console.log('done')
}

dataGen();