const mysql = require('mysql2');
//development
const env = process.env.NODE_ENV || 'test';
const config = require('./config.json')[env];

const connection = mysql.createConnection({
  host: config.host,
  user: config.username,
  password: config.password,
  database: config.database
});

/**
 * callback: function that return the result value
 */
var SelectAllProduct = (callback)=>{
  /*
  SELECT * FROM similar_products ORDER BY RAND() LIMIT 5
  */

  connection.query("SELECT * , (SELECT SUM(review_value) FROM similar_reviews WHERE similar_reviews.reviewProductID = similar_products.id_similar) as review, (SELECT COUNT(id_sreview) FROM similar_reviews WHERE similar_reviews.reviewProductID = similar_products.id_similar) as total FROM similar_products ORDER BY RAND() AND review DESC LIMIT 25", (error, results)=>{
    if(error){
      callback(error, null)
    }else{
      callback(null, results)
    }
  })
}

/**
 * id: id of the needed product
 * callback: function that return the result value
 */
var SelectProduct = (id, callback)=>{
  connection.query('SELECT * , (SELECT SUM(review_value) FROM similar_reviews WHERE similar_reviews.reviewProductID = similar_products.id_similar) as review, (SELECT COUNT(id_sreview) FROM similar_reviews WHERE similar_reviews.reviewProductID = similar_products.id_similar) as total FROM similar_products WHERE id_similar = ?', id, (error, results)=>{
    if(error){
      callback(error, null)
    }else{
      callback(null, results)
    }
  })
}

var InsertBulkProduct = (data, callback)=>{
  connection.query('INSERT INTO similar_products (title_similar, desc_similar, price_similar, img_similar, created_similar) VALUES ?', [data], (error, results)=>{
    if(error){
      callback(error, null);
    }else{
      callback(null, results);
    }
  })
}

/***
 *
 * data : [[title, desc, price, img, date]]
 * data-> type array (nested array)
 */
var InsertBulkReviews = (data, callback)=>{
  connection.query('INSERT INTO similar_reviews (review_value, reviewProductID, user_review, created_sreview) VALUES ?', [data], (error, results)=>{
    if(error){
      callback(error, null);
    }else{
      callback(null, results);
    }
  })
}

module.exports.insertbulk = InsertBulkProduct;
module.exports = {
  InsertBulkProduct,
  InsertBulkReviews,
  SelectAllProduct,
  SelectProduct
}