const {Client, Pool} = require('pg');
const path = require('path');

(async () => {
  const pool = new Pool({
    user: 'postgres',
    database: 'ikeaproducts',
    password: 'beckypete0206',
  });
  const client = await pool.connect();

  // had to hard code windows path because wsl uses linux path syntax then postgres can't find file
  const productPath = path.join(__dirname, '/..', '/dataGeneration', '/csvs', 'products.csv');
  try {
    let res = await client.query(`COPY similar_products (title_similar, desc_similar, price_similar, img_similar, created_similar, category_similar, review, total) FROM '${productPath}' CSV HEADER`);
    console.log('products inserted')
  } catch(err) {
    console.log(err);
  } finally {
    client.release();
  }

})();
