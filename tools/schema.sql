DROP DATABASE IF EXISTS ikeaproducts;
CREATE DATABASE ikeaproducts;

\c ikeaproducts;

CREATE TABLE similar_products (
  id_similar SERIAL UNIQUE PRIMARY KEY,
  title_similar varchar(100) NOT NULL,
  desc_similar varchar(250) NOT NULL,
  price_similar float NOT NULL,
  img_similar varchar(100) NOT NULL,
  created_similar varchar(250) NOT NULL,
  category_similar int NOT NULL
);

/* similar_reviews table */
CREATE TABLE similar_reviews (
  id_review SERIAL,
  value_review float NOT NULL,
  productId_review int NOT NULL REFERENCES similar_products(id_similar),
  user_review varchar(250) NOT NULL,
  created_review varchar(250) NOT NULL
);


