const { Client } = require('pg');

const pgdb = new Client({
  host: '54.215.230.119',
  port: 5432,
  user: 'postgres',
  password: 'yourpassword',
  database: 'people_also_viewed'
});

pgdb.connect();

const getSimilarRestaurants = function(restaurant_id, callback) {
  pgdb.query(`SELECT * FROM restaurants WHERE category = (SELECT category FROM restaurants WHERE restaurant_id = ${restaurant_id}) limit 10;`, (err, res) => {
    if (err) {
      callback(err)
    } else {
      callback(null, res)
    }
  })
}

const getReviews = function(restaurant_id, callback) {
  pgdb.query(`Select reviews.*, users.* from reviews inner join users on users.user_id = reviews.user_id where reviews.restaurant_id = ${restaurant_id}`, (err, res) => {
    if (err) {
      callback(err)
    } else {
      callback(null, res)
    }
  })
}

const addReview = function(review, callback) {
  pgdb.query(`INSERT INTO reviews (restaurant_id, user_id, date, comment, individual_rating) VALUES (${review.restaurantId}, ${review.userId}, '${review.date}', '${review.comment}', ${review.rating})`, (err, res) => {
    if (err) {
      callback(err)
    } else {
      callback(null, res)
    }
  })
}

const deleteReview = function(reviewId, callback) {
  pgdb.query(`DELETE FROM reviews WHERE review_id = ${reviewId};`, (err, res) => {
    if (err) {
      callback(err)
    } else {
      callback(null, res)
    }
  })
}

const updateReview = function(review, callback) {
  pgdb.query(`UPDATE reviews SET comment='${review.comment}' where review_id=${review.reviewId}`, (err, res) => {
    if (err) {
      callback(err)
    } else {
      callback(null, res)
    }
  })
}

const updateRestaurant = function(restaurant, callback) {
  pgdb.query(`UPDATE restaurants SET
  name = COALESCE(${restaurant.name===undefined ? null : "'"+restaurant.name+"'"}, name),
  price = COALESCE(${restaurant.price===undefined ? null : restaurant.price}, price),
  category = COALESCE(${restaurant.category===undefined ? null : "'"+restaurant.category+"'"}, category),
  display_img_url = COALESCE(${restaurant.displayImgUrl===undefined ? null : "'"+restaurant.displayImgUrl+"'"}, display_img_url),
  heart = COALESCE(${restaurant.heart===undefined ? null : restaurant.heart}, heart),
  super_rated = COALESCE(${restaurant.superRated===undefined ? null : restaurant.superRated}, super_rated),
  overall_rating = COALESCE(${restaurant.overallRating===undefined ? null : restaurant.overallRating}, overall_rating),
  reviews_num = COALESCE(${restaurant.reviewNum===undefined ? null : restaurant.reviewNum}, reviews_num)
  where restaurant_id=${restaurant.restaurantId}`, (err, res) => {
    if (err) {
      console.log(err)
      callback(err)
    } else {
      callback(null, res)
    }
  })
}


module.exports = {
  getSimilarRestaurants,
  getReviews,
  addReview,
  deleteReview,
  updateRestaurant,
  updateReview
}
