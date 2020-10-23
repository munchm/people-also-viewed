const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
const path = require('path')
const pgdb = require('../../database/Postgres')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', express.static(path.join(__dirname, '../../client/dist')));
app.get('/:restaurantId', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

app.get('/api/restaurants/:restaurantId/similar_restaurants', (req, res) => {
  const restaurantId = req.params.restaurantId
  pgdb.getSimilarRestaurants(restaurantId, (err, data) => {
    if (err) {
      res.status(400).send('could not retrieve data')
    } else {
      res.status(200).send(data.rows)
    }
  })
});

app.get('/api/restaurants/:restaurantId/reviews', (req, res) => {
  const restaurantId = req.params.restaurantId
  pgdb.getReviews(restaurantId, (err, data) => {
    if (err) {
      res.status(400).send('could not retrieve data')
    } else {
      res.status(200).send(data.rows)
    }
  })
});

app.post('/api/restaurants/:restaurantId/reviews', (req, res) => {
  const review = req.query
  review.restaurantId = req.params.restaurantId
  console.log(review)
  pgdb.addReview(review, (err, data) => {
    if (err) {
      res.status(400).send('could not retrieve data')
    } else {
      res.status(201).send('review added')
    }
  })
});

app.delete('/api/reviews/:reviewId', (req, res) => {
  const reviewId = req.params.reviewId
  pgdb.deleteReview(reviewId, (err, data) => {
    if (err) {
      res.status(400).send('could not delete')
    } else {
      res.status(200).send('deleted review')
    }
  })
});

app.put('/api/reviews/:reviewId', (req, res) => {
  const review = req.query
  review.reviewId = req.params.reviewId
  pgdb.updateReview(review, (err, data) => {
    if (err) {
      res.status(400).send('could not update')
    } else {
      res.status(202).send('updated review')
    }
  })
});

app.put('/api/restaurants/:restaurantId', (req, res) => {
  const restaurant = req.query
  restaurant.restaurantId = req.params.restaurantId
  pgdb.updateRestaurant(restaurant, (err, data) => {
    if (err) {
      res.status(400).send('could not update')
    } else {
      res.status(202).send('updated restaurant')
    }
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});