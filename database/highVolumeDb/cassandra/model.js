const cassandra = require('cassandra-driver');

class CassandraModel {
  constructor() {
    this.client = new cassandra.Client({
      contactPoints: ['172.31.7.183', '127.0.0.1'],
      localDataCenter: 'datacenter1',
      keyspace: 'ikeaproducts',
    });
  }

  async getRelatedProducts(id) {
    const queryText = 'SELECT * from similar_products WHERE category_similar = ? LIMIT 25';
    const queryValue = [id];
    try {
      return await this.client.execute(queryText, queryValue, {prepare: true});
    } catch(err) {
      throw err;
    }
  }

  async insertProduct(data) {
    const queryText = 'INSERT INTO similar_products(id_similar, title_similar, desc_similar, price_similar, img_similar, created_similar, category_similar, review, total) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    try {
      return await this.client.execute(queryText, data, {prepare: true});
    } catch(err) {
      console.log(err);
      throw err;
    }
  }
}

module.exports = new CassandraModel();