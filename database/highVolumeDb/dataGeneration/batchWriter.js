const createCsvWriter = require('csv-writer').createArrayCsvWriter;

module.exports = async (records, batchNumber, csvWriter) => {
  await csvWriter.writeRecords(records);
  // if (batchNumber % 100 === 0 ) {
  //   console.log(`Wrote batch number: ${batchNumber}`);
  // }
};
