# Project Name

> Project description

## Related Projects

 - https://github.com/Glity/photo-gallery
 - https://github.com/Glity/reviews
 - https://github.com/Glity/Calendar-reservation
 - https://github.com/Glity/people-also-viewed

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

# API Endpoints

## Get restaurant info
GET /getRestaurants/
### Path Parameters:
id restaurantNumber
### Success Status Code: 200
### Returns:
  {
  id: Number,
  name: String,
  reviews: Number,
  reviewsNum: Number,
  price: Number,
  category: Array,
  displayImgURL: String,
  heart: Boolean,
  super_rated: Boolean,
  inner_img: Array,
  reviewModal: Array,
  individual_rating: Number,

  unique_id: Number,
  __v: Number
}

##  Add Review
POST /getRestaurants/reviews:{restaurantNumber}
### Success Status Code: 200
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
PUT /getRestaurants/:{restaurantNumber}
### Success Status Code: 200
### Path Parameters:
id restaurantNumber
### Request Body: id is required, include only keys to be updated
 {
  id: Number,
  name: String,
  reviews: Number,
  reviewsNum: Number,
  price: Number,
  category: Array,
  displayImgURL: String,
  heart: Boolean,
  super_rated: Boolean,
  unique_id: Number,
  individual_rating: Number
}


## Delete review
DELETE /getRestaurants/reviews:{restaurantNumber}
### Success Status Code: 200
### Path Parameters:
id restaurantNumber