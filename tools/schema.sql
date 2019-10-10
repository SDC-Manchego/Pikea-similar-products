DROP DATABASE IF EXISTS ikeaproductsdb;
CREATE DATABASE ikeaproductsdb;

USE ikeaproductsdb;
/*
  mysql -u root ikeaproductsdb < schema.sql
*/

/* similar_products table */
CREATE TABLE similar_products (
  id_similar INT AUTO_INCREMENT PRIMARY KEY,
  title_similar varchar(100) NOT NULL,
  desc_similar varchar(250) NOT NULL,
  price_similar float NOT NULL,
  img_similar varchar(100) NOT NULL,
  created_similar DATETIME NOT NULL
)

/* similar_reviews table */
CREATE TABLE similar_reviews (
  id_sreview INT AUTO_INCREMENT PRIMARY KEY,
  review_value float NOT NULL,
  reviewProductID INT NOT NULL,
  user_review varchar(250) NOT NULL,
  created_sreview DATETIME NOT NULL,
  FOREIGN KEY (reviewProductID) REFERENCES similar_products (id_similar)
)


