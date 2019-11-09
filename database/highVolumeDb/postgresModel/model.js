const { Pool } = require('pg');

class PostgresModel {
  constructor() {
    this.pool = new Pool({
      user: 'postgres',
      database: 'ikeaproducts',
      password: 'beckypete0206',
    });
  }
  
  async getRelatedProducts(id) {
    // const client = await this.pool.connect();
    const query = 'SELECT * FROM similar_products WHERE category_similar = $1 LIMIT 25'
    try {
      return await this.pool.query(query, [id]);
    } catch (err) {
      throw(err);
    }
  } 
} 

module.exports = new PostgresModel();
