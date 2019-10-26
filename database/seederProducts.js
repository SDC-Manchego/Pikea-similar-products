const dataSeed = require('./data.js');
const database = require('./index.js');

/**
 * this function will do a bulk insert of product
 */
var seedProduct = function (callback){
  var arrProdSeed = dataSeed.seederProdFunc(101);
  database.InsertBulkProduct(arrProdSeed,(err, data)=>{
    if(err){
      console.log(`Bulk data record Product failed. Please try again ${err}`);
      process.exit();
    }else{
      console.log(`Bulk data record Product successfully. Total ${data.affectedRows}`);
      callback();
    }
  });
}

/**
 * this function will do a bulk insert of reviews : Limit 70
 */
var seedReviews = function(callback){
  var t = 1;
  for(var i=0; i<70; i++){
    var count = Math.floor(Math.random() * 10); // 0 a 10
    var arrProdSeed = dataSeed.SeedReviewFunc(count);
    if(arrProdSeed.length){
      database.InsertBulkReviews(arrProdSeed,(err, data)=>{
        if(err){
          console.log(`Bulk data record Reviews failed. Please try again. ${err}`);
        }else{
          console.log(`Bulk data record Reviews successfully. Total ${data.affectedRows}`);
        }
      });
    }
    t++;
  }

  if(t===70){
    callback()
  }
}
/**
 * Inner callback function
 */
seedProduct(()=>{
  seedReviews(()=>{
    console.log('Review product successful')
  })
})
