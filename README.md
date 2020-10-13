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

## API Endpoints

GET  - /restaurant/:{restaurantNumber}
Responds with object following database schema

POST - /restaurant
Request with object following schema to add to database

PUT - /restaurant
Request with object following schema to update entry in database

DELETE - /restaurant
Request with id to delete entry in database

database schema
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
  unique_id: Number,
  reviewModal: Array,
  individual_rating: Number
}