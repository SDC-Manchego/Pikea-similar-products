const dataSeed = require('./data.js');
const database = require('./index.js');

/**
 * this function will do a bulk insert of product
 */
var seedProduct = function (category, callback){
  var arrProdSeed = dataSeed.seederProdFunc(100, category);
  database.InsertBulkProduct(arrProdSeed,(err, data)=>{
    if(err){
      console.log(`Bulk data record Product failed. Please try again ${err}`);
      process.exit();
    }else{
      console.log(`Bulk data record Product successfully. Total ${data.affectedRows}`);
      callback(data.insertId)
    }
  });
}

/**
 * this function will do a bulk insert of reviews : Limit 70
 */
var seedReviews = function(lastid, callback){
  for(var i=0; i<70; i++){
    var minValue = lastid - 80;
    var id = Math.floor(Math.random() * (lastid - minValue) + minValue);
    var count = Math.floor(Math.random() * 10); // 0 a 10
    var arrProdSeed = dataSeed.SeedReviewFunc(id, count);
    if(arrProdSeed.length){
      database.InsertBulkReviews(arrProdSeed,(err, data)=>{
        if(err){
          console.log(`Bulk data record Reviews failed. Please try again. ${err}`);
        }else{
          console.log(`Bulk data record Reviews successfully. Total ${data.affectedRows}`);
        }
      });
    }
  }
}
/**
 * Inner callback function
 */
seedProduct(0, (lastid)=>{
  seedReviews(lastid, ()=>{
    //process.exit();
  })
})

seedProduct(1, (lastid)=>{
  seedReviews(lastid, ()=>{
    //process.exit();
  })
})
