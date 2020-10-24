const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

var restaurantsForPg = csvWriter();

const numberOfRestaurants = 10000000
const restaurantEndings = ['Cafe', 'Restaurant', 'Steak House', 'Pizza House', 'Diner', 'Eatery', 'Joint', 'Canteen', 'BBQ', 'Chophouse', 'Bar', 'Bistro', 'Sandwiches']
const categories = ['Ainu','Albanian','Argentine','Andhra','Anglo-Indian','Arab','Armenian','Assyrian','Awadhi','Azerbaijani','Balochi','Belarusian','Bangladeshi', 'Bengali','Berber','Brazilian','British','Buddhist','Bulgarian','Cajun','Cantonese','Caribbean','Chechen','Chinese cuisine','Chinese Islamic','Circassian','Crimean Tatar','Cypriot','Danish','Egyptian','English','Ethiopian','Eritrean','Estonian','French','Filipino','Georgian','German','Goan','Goan Catholic',
  'Greek','Gujarati','Hyderabad','Indian cuisine','Indian Chinese','Indian Singaporean cuisine','Indonesian','Inuit','Irish','Italian-American','Italian cuisine','Jamaican','Japanese','Jewish','Karnataka','Kazakh','Keralite','Korean','Kurdish','Laotian','Lebanese', 'Latvian','Lithuanian','Louisiana Creole','Maharashtrian','Mangalorean','Malay','Malaysian Chinese cuisine','Malaysian Indian cuisine','Mediterranean cuisine','Mennonite','Mexican','Mordovian','Mughal','Native American','Nepalese','New Mexican','Odia','Parsi','Pashtun','Polish','Pennsylvania Dutch','Pakistani','Peranakan','Persian','Peruvian','Portuguese','Punjabi', 'Rajasthani', 'Romanian','Russian','Sami','Serbian','Sindhi','Slovak','Slovenian','Somali','South Indian',
  'Soviet','Spanish', 'Sri Lankan','Taiwanese','Tatar','Texan','Thai','Turkish', 'Tamil','Udupi','Ukrainian','Vietnamese','Winter', 'Yamal', 'Zambian', 'Zanzibari']

const dataGen = () => {
  restaurantsForPg.pipe(fs.createWriteStream('restaurantsForPg.csv'));
  for (let i = 1; i <= numberOfRestaurants; i++) {
    const restaurantData = {
      restaurantId: i,
      name: `${faker.name.firstName()}'s ${restaurantEndings[Math.floor(Math.random()*13)]}`,
      price: Math.ceil(Math.random()*3),
      category: categories[Math.floor(Math.random()*114)],
      displayImgURL: `https://hrsf130-restaurants.s3-us-west-1.amazonaws.com/${Math.floor(Math.random()*1405)}.jpg`,
      heart: false,
      super_rated: Math.random() > .8,
      reviews: ((Math.floor(Math.random()*4)) / 2) + 3.5,
      reviews_num: 100 + Math.floor(Math.random() * 900)
    }
    restaurantsForPg.write(restaurantData)
  }

  restaurantsForPg.end()
  console.log('done')
}

dataGen();

