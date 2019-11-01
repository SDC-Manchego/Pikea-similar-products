const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const ProductGenerator = require('./productGenerator.js');
const batchWriter = require('./batchWriter.js');
const path = require('path');

let productData;
let productHeader = ProductGenerator.generateCsvHeader();
const csvWriter = createCsvWriter({
  path: path.join(__dirname, 'csvs', 'products.csv'),
  header: productHeader,
});

const writeProductsToCsv = async () => {
  for (let i = 0; i < 1000; i++) {
    productData = ProductGenerator.generateProducts(10000);
     await batchWriter(productData, i, csvWriter);
  }
};

// writeProductsToCsv();

module.exports = writeProductsToCsv;
