CREATE KEYSPACE IF NOT EXISTS ikeaproducts
  WITH REPLICATION = { 
      'class' : 'SimpleStrategy', 'replication_factor' : 1
  };

USE ikeaproducts;

CREATE TABLE IF NOT EXISTS similar_products (
  id_similar int,
  title_similar text,
  desc_similar text,
  price_similar float,
  img_similar text,
  created_similar text,
  category_similar int,
  review int,
  total int, 
  PRIMARY KEY(category_similar, id_similar)
);
