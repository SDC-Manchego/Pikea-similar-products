const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const ReviewGenerator = require('./reviewGenerator.js');
const path = require('path');

let reviewData;
let reviewHeader = ReviewGenerator.generateCsvHeader();
const csvWriter = createCsvWriter({
  path: path.join(__dirname, 'csvs', 'reviews.csv'),
  header: reviewHeader
});

const batchWriter = async (records, batchNumber) => {
  await csvWriter.writeRecords(reviewData);
  if (batchNumber %  10 === 0 ) {
    console.log(batchNumber);
  }
}
const writeReviewsToCsv = async() => {
  for (let i = 0; i < 2500; i++) {
    reviewData = ReviewGenerator.generateReviews(10000);
     await batchWriter(reviewData, i);
  }
};

writeReviewsToCsv();
