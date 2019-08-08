drop table if exists user_info;
drop table if exists credentials;
drop table if exists account;
drop table if exists transfer;

create table user_info(
user_id serial primary key,
username varchar(50),
email varchar(100));

create table credentials(
user_id integer,
hash text);

create table account(
account_id serial primary key,
user_id integer references user_info(user_id),
account_balance integer);

create table transfer(
transfer_id serial primary key,
account_id  integer references account(account_id),
transfer_type varchar(20),
transfer_amount integer);








