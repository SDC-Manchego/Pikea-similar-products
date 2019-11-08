const cassandra = require('cassandra-driver');

class CassandraModel {
  constructor() {
    this.client = new cassandra.Client({
      contactPoints: ['127.0.0.1'],
      localDataCenter: 'datacenter1',
      keyspace: 'ikeaproducts',
    });
  }

  async getRelatedProducts(id) {
    const queryText = 'SELECT * from similar_products WHERE category_similar = ? LIMIT 25';
    const queryValue = [id];
    try {
      let data = await this.client.execute(queryText, queryValue, {prepare: true});
      return data;
    } catch(err) {
      throw new Error('Error retrieving similar products');
    }
  }
}

module.exports = new CassandraModel();