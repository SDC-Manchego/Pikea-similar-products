const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    database: 'ikeaproducts',
    password: 'beckypete0206',
  });


module.exports = {
    selectSimilar: async (productId, callback) => {
      const client = await pool.connect();  
      // SELECT * FROM similar_products WHERE id_similar IN (SELECT id_similar FROM similar_products WHERE category_similar = $1) ORDER BY review DESC LIMIT 25
      queryText = 'SELECT * FROM similar_products WHERE id_similar IN (SELECT id_similar FROM similar_products WHERE category_similar = $1 LIMIT 25) ORDER BY review DESC'
      values = [productId];
      try {
        res = await client.query(queryText, values); 
      } catch (err) {
          console.log(err);
      } finally {
          client.release();
          return res;
      }
    }
}