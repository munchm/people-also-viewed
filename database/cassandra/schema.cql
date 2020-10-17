DROP KEYSPACE IF EXISTS people_also_viewed;

CREATE KEYSPACE people_also_viewed WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor' : 1 };

USE people_also_viewed;

CREATE TABLE restaurants (
  restaurant_id int,
  name varchar,
  price int,
  category varchar,
  display_img_url varchar,
  heart boolean,
  super_rated boolean,
  primary key(category, restaurantId)
);

CREATE TABLE reviews_by_restaurants (
  review_id int,
  restaurant_id int,
  name varchar,
  avatar varchar,
  date varchar,
  comment varchar,
  individual_rating float,
  primary key(restaurantId, reviewId)
);

CREATE TABLE reviews_by_users (
  review_id int,
  user_id int,
  name varchar,
  avatar varchar,
  date varchar,
  comment varchar,
  individual_rating float,
  primary key(user_id, reviewId)
)

CREATE TABLE users (
  user_id int,
  name varchar,
  avatar varchar,
  primary key(user_id)
)

-- Queries
-- select restaurants by restaurantId
-- select reviews_by_restaurants by restaurantId
-- insert reviews_by_restaurants
-- update restaurants by restaurantId
-- delete reviews_by_restaurants by reviewId
