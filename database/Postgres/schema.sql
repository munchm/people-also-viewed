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
  individual_rating float not null
);

create table users (
  user_id serial primary key,
  avatar varchar(100) not null,
  name varchar(30) not null
);