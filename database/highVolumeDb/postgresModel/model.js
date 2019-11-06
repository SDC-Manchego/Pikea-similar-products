const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    database: 'ikeaproducts',
    password: 'beckypete0206',
  });


module.exports = {
    selectSimilar: async (productId, callback) => {
      const client = await pool.connect();  
      queryText = 'SELECT * FROM similar_products Where category_similar = $1 ORDER BY review DESC FETCH FIRST 25 ROWS ONLY;'
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