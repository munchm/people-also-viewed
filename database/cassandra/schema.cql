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
  primary key(category, restaurant_id)
);

CREATE TABLE reviews_by_restaurants (
  review_id int,
  restaurant_id int,
  name varchar,
  avatar varchar,
  date varchar,
  comment varchar,
  individual_rating float,
  primary key(restaurant_id, review_id)
);

COPY people_also_viewed.restaurants (restaurant_id, name, price, category, display_img_url, heart, super_rated) FROM '/Users/johnnytang/Desktop/Hack_Reactor/SDC/people-also-viewed/restaurantsForCassandra.csv' WITH DELIMITER=',' AND HEADER=TRUE;

COPY people_also_viewed.reviews_by_restaurants (review_id, restaurant_id, name, avatar, date, comment, individual_rating) FROM '/Users/johnnytang/Desktop/Hack_Reactor/SDC/people-also-viewed/reviewsForCassandra.csv' WITH DELIMITER=',' AND HEADER=TRUE;

-- Queries
-- select restaurants by restaurant_id
-- select reviews_by_restaurants by restaurant_id
-- insert reviews_by_restaurants
-- update restaurants by restaurant_id
-- delete reviews_by_restaurants by review_id