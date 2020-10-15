drop database if exists people_also_viewed;

create database people_also_viewed;

\c people_also_viewed;

create table restaurants (
  restaurantId serial primary key,
  name varchar(255) not null,
  price int not null,
  category varchar(255) not null,
  displayImgURL varchar(255) not null,
  heart boolean not null,
  super_rated boolean not null
);

create table reviews (
  reviewId serial primary key,
  restaurantId int not null,
  userId int not null,
  date varchar(255) not null,
  comment varchar(255) not null,
  individual_rating int not null
);

create table users (
  userId serial primary key,
  avatar varchar(255) not null,
  name varchar(255) not null
);