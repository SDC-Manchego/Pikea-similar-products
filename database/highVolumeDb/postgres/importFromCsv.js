const {Client, Pool} = require('pg');
const path = require('path');
// const postgresConfig = require('./config.json');

(async () => {
  const pool = new Pool({
    user: 'postgres',
    database: 'ikeaproducts',
    password: 'beckypete0206'
  });
  const client = await pool.connect();

  // had to hard code windows path because wsl uses linux path syntax then postgres can't find file
  const productPath = 'D:\\hackreactor\\SDC\\djason-ikea-similar-products\\database\\highVolumeDb\\dataGeneration\\csvs\\reviews.csv';
  // console.log(productPath);
  const productInsert = `COPY similar_reviews (value_review, productId_review, user_review, created_review) FROM '${productPath}' DELIMITER \',\' CSV HEADER` ;
  try {
    await client.query(productInsert);
  } catch(err) {
    console.log(err);
  } finally {
    client.release();
  }

})();

// module.exports = client;