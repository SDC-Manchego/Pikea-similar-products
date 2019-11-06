CREATE KEYSPACE IF NOT EXISTS ikeaproducts
  WITH REPLICATION = { 
      'class' : 'SimpleStrategy', 'replication_factor' : 1
  };

USE ikeaproducts;
CREATE TABLE IF NOT EXISTS similar_products (
  id_similar int,
  title_simliar text,
  desc_similar text,
  price_simlar float,
  img_similar text,
  created_similar text,
  category_similar int,
  review int,
  total int 
);