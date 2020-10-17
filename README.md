# Project Name

> Project description

## Related Projects

 - https://github.com/munchm/photo-gallery
 - https://github.com/munchm/reviews
 - https://github.com/munchm/Calendar-reservation
 - https://github.com/munchm/people-also-viewed

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)



## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc


### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

# API Endpoints

## Get also viewed restaurants
GET /api/restaurants/:restuarantId
### Path Parameters:
id restuarantId
### Success Status Code: 200
### Returns:
  {
  id: Number,
  name: String,
  reviews: Number,
  reviewsNum: Number,
  price: Number,
  category: String,
  displayImgURL: String,
  heart: Boolean,
  inner_img: Array,
  reviewModal: Array,
  individual_rating: Number
}

##  Add Review
POST /api/restaurants/:restuarantId/reviews
### Success Status Code: 201
### Path Parameters:
id restaurantNumber
### Request Body:
  {avatar: String,
    Name: String,
    Date: String,
    Comment: String,
    individual_rating: Number
    }

## Update restaurant info
PUT /api/restaurants/:restuarantId
### Success Status Code: 202
### Path Parameters:
id restaurantNumber
### Request Body: include only keys to be updated
 {
  name: String,
  reviews: Number,
  reviewsNum: Number,
  price: Number,
  category: String,
  displayImgURL: String,
  heart: Boolean,
  super_rated: Boolean,
  individual_rating: Number
}

## Delete review
DELETE /api/reviews/:reviewId
### Success Status Code: 200
### Path Parameters:
id reviewId

## Database Schemas
https://docs.google.com/document/d/1gVPdWiDs9Mtf4NX622vfb6sagmv0Zxhd21IqiCOen8I/edit?usp=sharing