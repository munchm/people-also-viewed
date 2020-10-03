const db = require('./index');

// Creating Seed for Actual Data

const newSeed = () => {

  // Loading Seed to MongoDB 50 Times
  for (let i = 0; i < 50; i++) {

    const restaurant = ['Chungchun Rice Hotdogs', 'Buncker21', 'Flying Chichen Pa-Dak', 'Koko Chicken & BBQ', 'Tang 88', 'The SmoKING Ribs', 'Grams BBQ', 'Kaju Soft Tofu', 'Pho 45', 'Dry Noodle 168', 'Hue Oi', 'Tam Bien Express', 'Lien Hue', 'Bien Hen', 'Twinkle Brown Sugar', 'Sharetea', '7 Leaves Cafe', 'Kung Fu Tea', 'Gong Cha', 'Taste Tea Cafe', 'Tasty Noodle House', 'Ramen Zuru', 'Umaya Ramen', 'Tampopo', 'Niko Niko', 'Kabuki', 'Gyu-Kaku', 'Dip Shabu Shabu', 'Pepper Lunch', 'Yuzu Shabu', 'Geko Tei', 'Nine Seafood', 'Claws', 'Stinkin Crawfish', 'The Cajun Crab', 'Louisiana Chicken', 'Mezcalero', 'The Grasshopper', 'The Bamboo Club', 'NextDoor', 'District Wine', 'The Carvery', '555 East Steakhouse', 'King Fish House', 'The Crab Shack', 'Pier 76 Fish Grill', 'Restauration', 'Simmzy', 'Crooked Duck', 'The Local Spot'];
    const price = [1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2];
    const star = [4.5, 4.5, 4, 4.5, 4.5, 4.5, 4, 4, 4, 4, 3.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4, 4, 4.5, 3.5, 4.5, 4, 4, 4, 3.5, 3.5, 4, 3.5, 4, 4, 4.5, 3.5, 4.5, 3.5, 3.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4, 4.5, 4, 4, 4.5, 4, 4, 4.5, 4, 4.5];
    const reviews = [375, 341, 354, 48, 201, 1685, 594, 1882, 1574, 479, 387, 71, 38, 408, 52, 1366, 500, 397, 216, 719, 529, 271, 1727, 270, 670, 905, 671, 1293, 139, 1072, 480, 939, 398, 157, 305, 41, 179, 44, 162, 146, 823, 168, 1625, 1398, 223, 1854, 1024, 1451, 1379, 1143];
    const categoryList = ['Hot Dogs, Korean', 'Korean, Gastropubs', 'Chicken Wings, Pizza', 'Korean, BBQ', 'Korean', 'Caterers, BBQ', 'Korean, BBQ, Soup', 'Korean, Soup', 'Vietnamese, Soup', 'Noodles', 'Vietnamese, Soup', 'Vietnamese', 'Vietnamese', 'Seafood, Vietnamese', 'Bubble Tea, Juice Bars', 'Tea, Bubble Tea, Juice Bars', 'Coffee & Tea, Macarons', 'Bubble Tea', 'Coffee & Tea', 'Cafes, Bubble Tea', 'Taiwanese, Noodles', 'Ramen Zuru', 'Ramen, Pan Asian', 'Sushi Bars, Ramen', 'Japanese, Sushi Bars', 'Sushi Bars, Asian Fusion', 'Japanese, BBQ', 'Japanese, Hot Pot', 'Japanese, Steakhouses', 'Japanese, Hot Pot', 'Japanese, Comfort Food', 'Cajun, Seafood', 'Seafood, Soul Food', 'Cajun/Creole, Seafood', 'Cajun/Creole, Thai', 'Chicken Wings, Seafood', 'Cocktail Bars', 'Cocktail Bars', 'Tiki Bars', 'Mexican, American', 'Wine Bars', 'American, Steakhouses', 'Steakhouses', 'Seafood', 'Seafood, Cajun', 'Seafood, American', 'American', 'Gastropubs', 'Burgers', 'Break & Brunch, Diners'];
    const urlImage = ['a', 'b', 'c'];
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
      unique_id: uniqueID
    });
  }
}

newSeed();