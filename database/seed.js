const db = require('./index');
const faker = require('faker');

// Creating Seed for Actual Data

const seedOne = () => {

  // Loading Seed to MongoDB 50 Times
  for (let i = 0; i < 50; i++) {

    const restaurant = ['Chungchun Hotdogs', 'Buncker21', 'Flying Pa-Dak', 'Koko BBQ', 'Tang 88', 'The SmoKING Ribs', 'Grams BBQ', 'Kaju Tofu', 'Pho 45', 'Dry Noodle 168', 'Hue Oi', 'Tam Bien', 'Lien Hue', 'Bien Hen', 'Twinkle Boba', 'Sharetea', '7 Leaves Cafe', 'Kung Fu Tea', 'Gong Cha', 'Taste Tea Cafe', 'Tasty Noodle House', 'Ramen Zuru', 'Umaya Ramen', 'Tampopo', 'Niko Niko', 'Kabuki', 'Gyu-Kaku', 'Dip Shabu Shabu', 'Pepper Lunch', 'Yuzu Shabu', 'Geko Tei', 'Nine Seafood', 'Claws', 'Stinkin Crawfish', 'The Cajun Crab', 'Louisiana Chicken', 'Mezcalero', 'The Grasshopper', 'The Bamboo Club', 'NextDoor', 'District Wine', 'The Carvery', '555 East', 'King Fish House', 'The Crab Shack', 'Pier 76', 'Restauration', 'Simmzy', 'Crooked Duck', 'The Local Spot'];
    const price = [1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2];
    const star = [4.5, 4.5, 4, 4.5, 4.5, 4.5, 4, 4, 4, 4, 3.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4, 4, 4.5, 3.5, 4.5, 4, 4, 4, 3.5, 3.5, 4, 3.5, 4, 4, 4.5, 3.5, 4.5, 3.5, 3.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4, 4.5, 4, 4, 4.5, 4, 4, 4.5, 4, 4.5];
    const reviews = [375, 341, 354, 48, 201, 1685, 594, 1882, 1574, 479, 387, 71, 38, 408, 52, 1366, 500, 397, 216, 719, 529, 271, 1727, 270, 670, 905, 671, 1293, 139, 1072, 480, 939, 398, 157, 305, 41, 179, 44, 162, 146, 823, 168, 1625, 1398, 223, 1854, 1024, 1451, 1379, 1143];
    const categoryList = ['Hot Dogs, Korean', 'Korean, Gastropubs', 'Chicken Wings, Pizza', 'Korean, BBQ', 'Korean', 'Caterers, BBQ', 'Korean, BBQ, Soup', 'Korean, Soup', 'Vietnamese, Soup', 'Noodles', 'Vietnamese, Soup', 'Vietnamese', 'Vietnamese', 'Seafood, Vietnamese', 'Bubble Tea, Juice Bars', 'Tea, Bubble Tea, Juice Bars', 'Coffee & Tea, Macarons', 'Bubble Tea', 'Coffee & Tea', 'Cafes, Bubble Tea', 'Taiwanese, Noodles', 'Ramen Zuru', 'Ramen, Pan Asian', 'Sushi Bars, Ramen', 'Japanese, Sushi Bars', 'Sushi Bars, Asian Fusion', 'Japanese, BBQ', 'Japanese, Hot Pot', 'Japanese, Steakhouses', 'Japanese, Hot Pot', 'Japanese, Comfort Food', 'Cajun, Seafood', 'Seafood, Soul Food', 'Cajun/Creole, Seafood', 'Cajun/Creole, Thai', 'Chicken Wings, Seafood', 'Cocktail Bars', 'Cocktail Bars', 'Tiki Bars', 'Mexican, American', 'Wine Bars', 'American, Steakhouses', 'Steakhouses', 'Seafood', 'Seafood, Cajun', 'Seafood, American', 'American', 'Gastropubs', 'Burgers', 'Break & Brunch, Diners'];
    const urlImage = [`${i + 1}a.jpg`, `${i + 1}b.jpg`, `${i + 1}c.jpg`];
    const uniq_identifier = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

    const bizName = restaurant[i];
    const costly = price[i];
    const userRatings = star[i];
    const reviewsCount = reviews[i];
    const categoryDetails = categoryList[i];
    const uniqueID = uniq_identifier[i];
    const mainImg = `https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/newseed/${i + 1}a.jpg`;
    const liked = false;
    const highly_rated = false;

    const randReviewsNum = faker.random.number({
      min: 3,
      max: 8
    });

    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const reviewArr = [];

    for (let j = 0; j < randReviewsNum; j++) {

      const review_userAvatar = `https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/avatar/${faker.random.number({ min: 1, max: 50 })}.png`;
      const review_userName = faker.name.firstName() + ' ' + faker.name.lastName().slice(0, 1) + '.';
      const review_userPostDate = month[faker.random.number({ min: 0, max: 11 })] + ' ' + faker.random.number({ min: 2018, max: 2020 }).toString();
      const review_userComment = faker.lorem.sentences(faker.random.number({ min: 1, max: 5 }));

      reviewArr.push({
        avatar: review_userAvatar,
        name: review_userName,
        date: review_userPostDate,
        comment: review_userComment
      });
    };

    db.Restaurant.create({
      name: bizName,
      reviews: userRatings,
      reviewsNum: reviewsCount,
      price: costly,
      category: categoryDetails,
      displayImgURL: mainImg,
      heart: liked,
      super_rated: highly_rated,
      inner_img: urlImage,
      unique_id: uniqueID,
      reviewModal: reviewArr
    });
  };
}

const seedTwo = () => {

  // Loading Seed to MongoDB 50 Times
  for (let i = 0; i < 50; i++) {

    const restaurant = ['Chungchun Hotdogs', 'Buncker21', 'Flying Pa-Dak', 'Koko BBQ', 'Tang 88', 'The SmoKING Ribs', 'Grams BBQ', 'Kaju Tofu', 'Pho 45', 'Dry Noodle 168', 'Hue Oi', 'Tam Bien', 'Lien Hue', 'Bien Hen', 'Twinkle Boba', 'Sharetea', '7 Leaves Cafe', 'Kung Fu Tea', 'Gong Cha', 'Taste Tea Cafe', 'Tasty Noodle House', 'Ramen Zuru', 'Umaya Ramen', 'Tampopo', 'Niko Niko', 'Kabuki', 'Gyu-Kaku', 'Dip Shabu Shabu', 'Pepper Lunch', 'Yuzu Shabu', 'Geko Tei', 'Nine Seafood', 'Claws', 'Stinkin Crawfish', 'The Cajun Crab', 'Louisiana Chicken', 'Mezcalero', 'The Grasshopper', 'The Bamboo Club', 'NextDoor', 'District Wine', 'The Carvery', '555 East', 'King Fish House', 'The Crab Shack', 'Pier 76', 'Restauration', 'Simmzy', 'Crooked Duck', 'The Local Spot'];
    const price = [1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2];
    const star = [4.5, 4.5, 4, 4.5, 4.5, 4.5, 4, 4, 4, 4, 3.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4, 4, 4.5, 3.5, 4.5, 4, 4, 4, 3.5, 3.5, 4, 3.5, 4, 4, 4.5, 3.5, 4.5, 3.5, 3.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4, 4.5, 4, 4, 4.5, 4, 4, 4.5, 4, 4.5];
    const reviews = [375, 341, 354, 48, 201, 1685, 594, 1882, 1574, 479, 387, 71, 38, 408, 52, 1366, 500, 397, 216, 719, 529, 271, 1727, 270, 670, 905, 671, 1293, 139, 1072, 480, 939, 398, 157, 305, 41, 179, 44, 162, 146, 823, 168, 1625, 1398, 223, 1854, 1024, 1451, 1379, 1143];
    const categoryList = ['Hot Dogs, Korean', 'Korean, Gastropubs', 'Chicken Wings, Pizza', 'Korean, BBQ', 'Korean', 'Caterers, BBQ', 'Korean, BBQ, Soup', 'Korean, Soup', 'Vietnamese, Soup', 'Noodles', 'Vietnamese, Soup', 'Vietnamese', 'Vietnamese', 'Seafood, Vietnamese', 'Bubble Tea, Juice Bars', 'Tea, Bubble Tea, Juice Bars', 'Coffee & Tea, Macarons', 'Bubble Tea', 'Coffee & Tea', 'Cafes, Bubble Tea', 'Taiwanese, Noodles', 'Ramen Zuru', 'Ramen, Pan Asian', 'Sushi Bars, Ramen', 'Japanese, Sushi Bars', 'Sushi Bars, Asian Fusion', 'Japanese, BBQ', 'Japanese, Hot Pot', 'Japanese, Steakhouses', 'Japanese, Hot Pot', 'Japanese, Comfort Food', 'Cajun, Seafood', 'Seafood, Soul Food', 'Cajun/Creole, Seafood', 'Cajun/Creole, Thai', 'Chicken Wings, Seafood', 'Cocktail Bars', 'Cocktail Bars', 'Tiki Bars', 'Mexican, American', 'Wine Bars', 'American, Steakhouses', 'Steakhouses', 'Seafood', 'Seafood, Cajun', 'Seafood, American', 'American', 'Gastropubs', 'Burgers', 'Break & Brunch, Diners'];
    const urlImage = [`${i + 1}a.jpg`, `${i + 1}b.jpg`, `${i + 1}c.jpg`];
    const uniq_identifier = [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

    const bizName = restaurant[i];
    const costly = price[i];
    const userRatings = star[i];
    const reviewsCount = reviews[i];
    const categoryDetails = categoryList[i];
    const uniqueID = uniq_identifier[i];
    const mainImg = `https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/newseed/${i + 1}b.jpg`;
    const liked = false;
    const highly_rated = false;

    const randReviewsNum = faker.random.number({
      min: 3,
      max: 8
    });

    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const reviewArr = [];

    for (let j = 0; j < randReviewsNum; j++) {

      const review_userAvatar = `https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/avatar/${faker.random.number({ min: 1, max: 50 })}.png`;
      const review_userName = faker.name.firstName() + ' ' + faker.name.lastName().slice(0, 1) + '.';
      const review_userPostDate = month[faker.random.number({ min: 1, max: 12 })] + ' ' + faker.random.number({ min: 2018, max: 2020 }).toString();
      const review_userComment = faker.lorem.sentences(faker.random.number({ min: 1, max: 5 }));

      reviewArr.push({
        avatar: review_userAvatar,
        name: review_userName,
        date: review_userPostDate,
        comment: review_userComment
      });
    };

    db.Restaurant.create({
      name: bizName,
      reviews: userRatings,
      reviewsNum: reviewsCount,
      price: costly,
      category: categoryDetails,
      displayImgURL: mainImg,
      heart: liked,
      super_rated: highly_rated,
      inner_img: urlImage,
      unique_id: uniqueID,
      reviewModal: reviewArr
    });
  };
}

seedOne();
seedTwo();