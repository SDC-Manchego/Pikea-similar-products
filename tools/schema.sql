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
  category_similar int NOT NULL,
  review int NOT NULL,
  total int NOT NULL
);

/* similar_reviews table */
-- CREATE TABLE similar_reviews (
--   id_sreview int NOT NULL AUTO_INCREMENT,
--   review_value float NOT NULL,
--   reviewProductID int NOT NULL,
--   user_review varchar(250) NOT NULL,
--   created_sreview DATETIME NOT NULL,
--   PRIMARY KEY(id_sreview),
--   FOREIGN KEY (reviewProductID) REFERENCES similar_products (id_similar)
-- );


