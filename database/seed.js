const db = require('./index');
const faker = require('faker');

const seed = () => {

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
    const randHeart = false;
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
  }
};

seed();

const restaurant = ['Chungchun Rice Hotdogs', 'Buncker21', 'Flying Chichen Pa-Dak', 'Koko Chicken & BBQ', 'Tang 88', 'The SmoKING Ribs', 'Grams BBQ', 'Kaju Soft Tofu', 'Pho 45', 'Dry Noodle 168', 'Hue Oi', 'Tam Bien Express', 'Lien Hue', 'Bien Hen', 'Twinkle Brown Sugar', 'Sharetea', '7 Leaves Cafe', 'Kung Fu Tea', 'Gong Cha', 'Taste Tea Cafe', 'Tasty Noodle House', 'Ramen Zuru', 'Umaya Ramen', 'Tampopo', 'Niko Niko', 'Kabuki', 'Gyu-Kaku', 'Dip Shabu Shabu', 'Pepper Lunch', 'Yuzu Shabu', 'Geko Tei', 'Nine Seafood', 'Claws', 'Stinkin Crawfish', 'The Cajun Crab', 'Louisiana Famous Fried Chicken', 'Mezcalero', 'The Grasshopper', 'The Bamboo Club', 'NextDoor', 'District Wine', 'The Carvery', '555 East Steakhouse', 'King Fish House', 'The Crab Shack', 'Pier 76 Fish Grill', 'Restauration', 'Simmzy', 'Crooked Duck', 'The Local Spot'];
const price = [1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2];
const star = [4.5, 4.5, 4, 4.5, 4.5, 4.5, 4, 4, 4, 4, 3.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4, 4, 4.5, 3.5, 4.5, 4, 4, 4, 3.5, 3.5, 4, 3.5, 4, 4, 4.5, 3.5, 4.5, 3.5, 3.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4, 4.5, 4, 4, 4.5, 4, 4, 4.5, 4, 4.5];
const reviews = [375, 341, 354, 48, 201, 1685, 594, 1882, 1574, 479, 387, 71, 38, 408, 52, 1366, 500, 397, 216, 719, 529, 271, 1727, 270, 670, 905, 671, 1293, 139, 1072, 480, 939, 398, 157, 305, 41, 179, 44, 162, 146, 823, 168, 1625, 1398, 223, 1854, 1024, 1451, 1379, 1143];
const categoryList = ['Hot Dogs, Korean', 'Korean, Gastropubs, Chicken Wings', 'Chicken Wings, Pizza', 'Chicken Wings, Korean, BBQ', 'Korean', 'Caterers, BBQ', 'Korean, BBQ, Soup', 'Korean, Soup', 'Vietnamese, Soup', 'Noodles', 'Vietnamese, Soup', 'Vietnamese', 'Vietnamese', 'Seafood, Vietnamese', 'Bubble Tea, Juice Bars', 'Tea, Bubble Tea, Juice Bars', 'Coffee & Tea, Macarons', 'Bubble Tea', 'Coffee & Tea', 'Cafes, Bubble Tea', 'Taiwanese, Noodles', 'Ramen Zuru', 'Ramen, Pan Asian', 'Sushi Bars, Ramen', 'Japanese, Sushi Bars', 'Sushi Bars, Asian Fusion', 'Japanese, BBQ', 'Japanese, Hot Pot', 'Japanese, Steakhouses', 'Japanese, Hot Pot', 'Japanese, Comfort Food', 'Cajun/Creole, Seafood', 'Seafood, Soul Food', 'Cajun/Creole, Seafood', 'Cajun/Creole, Thai', 'Chicken Wings, Seafood', 'Cocktail Bars', 'Cocktail Bars', 'Tiki Bars', 'Mexican, American(New)', 'Wine Bars', 'American(New), Steakhouses', 'Steakhouses', 'Seafood', 'Seafood, Cajun/Creole', 'Seafood, American', 'American, Breakfast', 'Gastropubs, Burgers', 'American(New), Burgers', 'Break & Brunch, Diners'];
const urlImage = [a, b, c];
const identifier = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]

// const newSeed = () => {

//   for ()


// }