const dataSeed = require('./data.js');
const database = require('./index.js');

/**
 * this function will do a bulk insert of product
 */
var seedProduct = function (callback){
  var arrProdSeed = dataSeed.seederProdFunc(100);
  database.InsertBulkProduct(arrProdSeed,(err, data)=>{
    if(err){
      console.log(`Bulk data record failed. Please try again`);
      process.exit();
    }else{
      callback()
      console.log(`Bulk data record successfully. Total ${data.affectedRows}`);
    }
  });
}

/**
 * this function will do a bulk insert of reviews : Limit 70
 */
var seedReviews = function(callback){
  for(var i=0; i<70; i++){
    var id = Math.floor(Math.random() * 100) + 1; // 1 a 100
    var count = Math.floor(Math.random() * 10); // 0 a 10
    var arrProdSeed = dataSeed.SeedReviewFunc(id, count);
    if(arrProdSeed.length){
      database.InsertBulkReviews(arrProdSeed,(err, data)=>{
        if(err){
          console.log(`Bulk data record failed. Please try again`);
        }else{
          console.log(`Bulk data record successfully. Total ${data.affectedRows}`);
        }
      });
    }
  }
}
/**
 * Inner callback function
 */
seedProduct(()=>{
  seedReviews(()=>{
    //process.exit();
  })
})
