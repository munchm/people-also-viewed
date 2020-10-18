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

const getReviews = (restaurantId) => {
  cassandradb.execute(`SELECT * FROM reviews_by_restaurants WHERE restaurant_Id=${restaurantId}`)
    .then((result) => {
      console.log(result.rows)
    })
    .catch((err) => {
      console.log(err)
    })
}

const deletedReview = (reviewId) => {
  cassandradb.execute(`DELETE FROM reviews_by_restaurants WHERE review_Id = ${reviewId}`)
}

const insertReviews = (review) => {
  cassandradb.execute(`INSERT INTO reviews_by_restaurants (restaurant_Id, username, avatar, date, comment, individual_rating`)
}

const updateRestaurant = () => {

}



getRestaurant(500)