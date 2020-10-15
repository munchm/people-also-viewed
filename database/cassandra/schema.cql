drop keyspace if exists people_also_viewed;

create keyspace people_also_viewed replication =
  {‘class’: ‘SimpleStrategy’, ‘replication_factor’ : 1};

use people_also_viewed;

create table restaurants (
  restaurantId int primary key,
  name varchar,
  price int,
  category varchar,
  displayImgURL varchar,
  heart boolean,
  super_rated boolean
)

create table reviews_by_restaurants (
  reviewId int,
  restaurantId int,
  userId int,
  userName varchar,
  avatar varchar,
  date varchar,
  comment varchar,
  individual_rating int,
  primary key(restaurantId, reviewId)
)

-- Queries
-- select restaurants by restaurantId
-- select reviews_by_restaurants by restaurantId
-- insert reviews_by_restaurants
-- update restaurants by restaurantId
-- delete reviews_by_restaurants by reviewId
