const cassandra = require('cassandra-driver')

const cassandradb = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'people_also_viewed'
})

const getRestaurant = (restaurantId) => {
  cassandradb.execute(`SELECT * FROM restaurants WHERE restaurantId=${restaurantId}`)
    .then((result) => {
      console.log(result.rows[0])
    })
    .catch((err) => {
      console.log(err)
    })
}

const getReviews = (restaurantId) => {
  cassandradb.execute(`SELECT * FROM reviews WHERE restaurantId=${restaurantId}`)
    .then((result) => {
      console.log(result.rows)
    })
    .catch((err) => {
      console.log(err)
    })
}

const deletedReview = (reviewId) => {
  cassandradb.execute(`DELETE FROM reviews WHERE reviewId = ${reviewId}`)
}

const insertReviews = () => {
  cassandradb.execute(`INSERT INTO reviews (restaurantId, username, avatar, date, comment, individual_rating`)
}

const updateRestaurant = () => {

}



getRestaurant(500)