# Diagram database

Table users {
id int [pk]
email varchar
password varchar
name varchar
role int
avatar varchar
phone int
created_at datetime
updated_at datetime
}

Table categories {
id int [pk]
name varchar
image text
}

Table products {
id int [pk]
name varchar
image text
price int
oldprice int
description text
specification text
buyturn int // bn san pham dc mua
quantity int // so luong san pham ton kho
brand_id int
category_id int
created_at datetime
updated_at datetime
}

Ref: "categories".id < "products".category_id

Table brands {
id int [pk]
name varchar
image text
}

Ref: "brands".id < "products".brand_id

Table Feedback {
id int [pk]
product_id int
user_id int
star int
content text
created_at datetime
updated_at datetime
}

Ref: "products".id < "Feedback".product_id
Ref: "users".id < "Feedback".user_id

Table orders {
id int [pk]
user_id int
status int
note text
total int
created_at datetime
updated_at datetime
}

Ref: "users".id < "orders".user_id

Table order_details {
id int [pk]
order_id int
product_id int
price int
quantity int
created_at datetime
updated_at datetime
}

Ref: "orders".id < "order_details".order_id

Table news {
id int [pk]
title varchar
image text
content text
created_at datetime
update_at datetime
}

Table news_details {
id int [pk]
product_id int
news_id int
created_at datetime
updated_at datetime
}

Ref: "news".id < "news_details".news_id
Ref: "products".id < "news_details".product_id
Ref: "products".id < "order_details".product_id

Table banners {
id int [pk]
name varchar
image text
status int
created_at datetime
updated_at datetime
}

Table banner_details {
id int [pk]
product_id int
banner_id int
created_at datetime
updated_at datetime
}

Ref: "products".id < "banner_details".product_id
Ref: "banners".id < "banner_details".banner_id

![image](diagram_db.png)

## Migrate (node js - express)

- install mysql2 -> cmd: yarn add mysql2
- install sequelize -> cmd: yarn add sequelize
- install sequelize-cli -> cmd: yarn add sequelize-cli

# Create directory tree

- cmd: npx sequelize-cli init

# Generate model

- cmd: npx sequelize-cli model:generate --name <name> --attributes <x, ...>
- Example: npx sequelize-cli model:generate --name User --attributes email:string, password:string,name:string,role:integer,avatar:string,phone:integer,created_at:date,updated_at:date

# Run Migrations

- cmd: npx sequelize-cli db:migrate

# Undo Migrate

- cmd: npx sequelize-cli db:migrate:undo

- cmd: npx sequelize-cli db:migrate:undo:all

# Check Foreign Key

- jquery: SELECT \* FROM information_schema.table_constraints WHERE table_schema = 'db name' AND table_name = 'table name';

- Ex:
  SELECT \* FROM information_schema.table_constraints WHERE table_schema = 'shopapp_online' AND table_name = 'orders';

# Download babel node

- cmd: yarn add --dev @babel/core @babel/node @babel/preset-env

# Docker compose

- cmd: docker compose -f ./deployments.yml up -d
