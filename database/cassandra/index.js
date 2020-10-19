const cassandra = require('cassandra-driver')

const cassandradb = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'people_also_viewed'
})

const getRestaurant = (restaurantId) => {
  cassandradb.execute(`SELECT * FROM restaurants WHERE restaurant_Id=${restaurantId}`)
    .then((result) => {
      console.log(result.rows[0])
    })
    .catch((err) => {
      console.log(err)
    })
}

const getSimilarRestaurants = (category) => {
  cassandradb.execute(`SELECT * FROM restaurants WHERE category='${category}' limit 10 allow filtering`)
    .then((result) => {
      console.log(result.rows)
    })
    .catch((err) => {
      console.log(err)
    })
}

const getReviews = (restaurantId) => {
  cassandradb.execute(`SELECT * FROM reviews_by_restaurants WHERE restaurant_Id=${restaurantId}`)
    .then((result) => {
      console.log(result.rows)
    })
    .catch((err) => {
      console.log(err)
    })
}

const deletedReview = (restaurantId, reviewId) => {
  cassandradb.execute(`DELETE FROM reviews_by_restaurants WHERE restaurant_id = ${restaurantId} review_Id = ${reviewId}`)
    .catch((err) => {
      console.log(err)
    })
}

const insertReviews = (review) => {
  cassandradb.execute(`INSERT INTO reviews_by_restaurants (restaurant_id, review_id, name, avatar, date, comment, individual_rating) VALUES (${review.restaurantId}, uuid(), ${review.userName}, ${review.avatar}, ${review.date}, ${review.comment}, ${review.rating}`)
    .catch((err) => {
      console.log(err)
    })
}

const updateReview = (review, reviewId, restaurantId) => {
  cassandradb.execute(`UPDATE reviews_by_restaurants SET comment=${review} where restaurant_id=${restaurantId} and review_id=${reviewId}`)
    .catch((err) => {
      console.log(err)
    })
}