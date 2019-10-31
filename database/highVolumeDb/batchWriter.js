module.exports = async (records, batchNumber) => {
  await csvWriter.writeRecords(reviewData);
  if (batchNumber % 100 === 0 ) {
    console.log(`Wrote batch number: ${batchNumber}`);
  }
}