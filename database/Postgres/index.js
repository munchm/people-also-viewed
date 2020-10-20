const { Client } = require('pg');

const pgdb = new Client({
  host: 'localhost',
  user: 'johnnytang',
  database: 'people_also_viewed'
});

pgdb.connect();

const getSimilarRestaurants = function(restaurant_id) {
  pgdb.query(`SELECT * FROM restaurants WHERE category = (SELECT category FROM restaurants WHERE restaurant_id = ${restaurant_id}) limit 10;`, (err, res) => {
    if (err) {
      console.log(err)
    } else {
      console.log(res.rows)
    }
  })
}

const addReview = function(review) {
  pgdb.query(`INSERT INTO reviews (restaurant_id, user_id, date, comment, individual_rating) VALUES (${review.restaurantId}, ${review.userId}, '${review.date}', '${review.comment}', ${review.rating})`, (err) => {
    if (err) {
      console.log(err)
    }
  })
}

const deleteReview = function(reviewId) {
  pgdb.query(`DELETE FROM reviews WHERE review_id = ${reviewId};`, (err) => {
    if (err) {
      console.log(err)
    }
  })
}

const updateReview = function(review) {
  pgdb.query(`UPDATE reviews SET comment='${review.comment}' where review_id=${review.reviewId}`, (err) => {
    if (err) {
      console.log(err)
    }
  })
}

getSimilarRestaurants(100)

module.exports = { pgdb }