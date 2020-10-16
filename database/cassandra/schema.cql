DROP KEYSPACE IF EXISTS people_also_viewed;

CREATE KEYSPACE people_also_viewed WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor' : 1 };

USE people_also_viewed;

CREATE TABLE restaurants (
  restaurantId int primary key,
  name varchar,
  price int,
  category varchar,
  displayImgURL varchar,
  heart boolean,
  super_rated boolean
);

CREATE TABLE reviews_by_restaurants (
  reviewId int,
  restaurantId int,
  userName varchar,
  avatar varchar,
  date varchar,
  comment varchar,
  individual_rating int,
  primary key(restaurantId, reviewId)
);

-- Queries
-- select restaurants by restaurantId
-- select reviews_by_restaurants by restaurantId
-- insert reviews_by_restaurants
-- update restaurants by restaurantId
-- delete reviews_by_restaurants by reviewId
