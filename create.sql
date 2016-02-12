//all commands used:
create database projectReddit;
use projectReddit;
create table users (id INT primary key auto_increment, email VARCHAR(255), password VARCHAR(40), screenName VARCHAR(255), createOn timestamp, modifiedOn timestamp); 
create table posts (id INT primary key auto_increment, url VARCHAR(255), title VARCHAR(255), userid INT, createOn timestamp, modifiedOn timestamp);
create table votes (id INT primary key auto_increment, userid INT, postsid INT, updown boolean, createOn timestamp, modifiedOn timestamp);