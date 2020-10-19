-- psql -f database/Postgres/schema.sql

drop database if exists people_also_viewed;

create database people_also_viewed;

\c people_also_viewed;

create table restaurants (
  restaurant_id serial primary key,
  name varchar(30) not null,
  price int not null,
  category varchar(30) not null,
  display_img_URL varchar(100) not null,
  heart boolean not null,
  super_rated boolean not null
);

create table reviews (
  review_id serial primary key,
  restaurant_id int not null,
  user_id int not null,
  date varchar(30) not null,
  comment text not null,
  individual_rating float not null,
  constraint fk_restaurants foreign key(restaurant_id) references restaurants(restaurant_id) on delete set null,
  constraint fk_users foreign key(user_id) references users(user_id) on delete set null
);

create table users (
  user_id serial primary key,
  avatar varchar(100) not null,
  name varchar(30) not null
);

COPY restaurants (restaurant_id, name, price, category, display_img_url, heart, super_rated) FROM '/Users/johnnytang/Desktop/Hack_Reactor/SDC/people-also-viewed/restaurantsForPg.csv' DELIMITER ',' CSV HEADER;

COPY reviews (review_id, restaurant_id, user_id, date, comment, individual_rating) FROM '/Users/johnnytang/Desktop/Hack_Reactor/SDC/people-also-viewed/reviewsForPg.csv' DELIMITER ',' CSV HEADER;

COPY users (user_id, avatar, name) FROM '/Users/johnnytang/Desktop/Hack_Reactor/SDC/people-also-viewed/usersForPg.csv' DELIMITER ',' CSV HEADER;