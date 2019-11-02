const {Client, Pool} = require('pg');
const path = require('path');
// const postgresConfig = require('./config.json');
let client;
(async () => {
  const pool = new Pool({
    user: 'postgres',
    database: 'ikeaproducts',
    password: 'beckypete0206'
  });
  client = await pool.connect();
  const productPath = [path.join(__dirname, '../','dataGeneration', 'csvs', 'products.csv')];
  // console.log(productPath);
  const productInsert = 'COPY similar_products (title_similar, desc_similar, price_similar, img_similar, created_similar, category_similar) FROM \'D:\\hackreactor\\SDC\\djason-ikea-similar-products\\database\\highVolumeDb\\dataGeneration\\csvs\\products.csv\' WITH DELIMITER \',\' CSV HEADER' ;
  try {
    const res = await client.query(productInsert);
    console.log('insert complete');
  } catch (err) {
    console.log(err);
  }
  await client.end()
})();

// module.exports = client;