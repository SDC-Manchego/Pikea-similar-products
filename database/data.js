/**
 * Pseudo-classical Function to seed product
 */

var SeedData = function(){
  this.titleArr = ['FRIHETEN', 'BRATHULT', 'HOLMSUND', 'SANDBACKEN', 'HEMNES', 'BALKARP', 'FÄRLÖV', 'BRIMNES', 'FLOTTEBO', 'FLEKKE', 'FYRESDAL', 'YPPERLIG', 'VALLENTUNA', 'VALLENTUNA', 'KARLSTAD', 'KIVIK'];

  this.descArr = ['Sleeper sofa', 'Sleeper sectional, 3-seat', 'Daybed with 2 drawers/2 mattresses, Twin', 'Daybed frame with 2 drawers, Twin', 'Sleeper sectional, 3-seat', 'Sleeper sofa, 47 1/4', 'Daybed with 2 mattresses, Twin'];

  this.pricerr = [199.00, 899.00, 655.00, 449.00, 1190.00, 599.00];

  this.imgArr = [
  'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/SOFA_BED_IMG02.jpeg',
  'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/SOFA_BED_IMG0206.jpeg',
  'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/SOFA_BED_IMG0208.jpeg',
  'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/SOFA_BED_IMG03.jpeg',
  'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/SOFA_BED_IMG04.jpeg',
  'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/SOFA_BED_IMG05.JPG',
  'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/SOFA_BED_IMG07.JPG',
  'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/SOFA_BED_IMG09.JPG',
  'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/SOFA_BED_IMG10.jpeg'
  ];
  this.data = [];
}

SeedData.prototype.title = function(){
  return this.titleArr[Math.floor(Math.random() * this.titleArr.length)];
}

SeedData.prototype.description = function(){
  return this.descArr[Math.floor(Math.random() * this.descArr.length)];
}

SeedData.prototype.price = function(){
  return this.pricerr[Math.floor(Math.random() * this.pricerr.length)];
}

SeedData.prototype.images = function(){
  return this.imgArr[Math.floor(Math.random() * this.imgArr.length)];
}

SeedData.prototype.dates = function(){
  var start = new Date(2019, 0, 1);
  var end = new Date()
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

var seederProdFunc = function(number){
  var dataArr = [];
  for(var i=0; i< number; i++){
    var seeder = new SeedData();

    var img = seeder.images();
    var price = seeder.price();
    var desc = seeder.description();
    var title = seeder.title();
    var date = seeder.dates();
    dataArr.push([title, desc, price, img, date])
  }

  return dataArr
}


/**
 * Pseudo-classical Function to seed Reviews
 */
var SeedReview = function(){
  this.reviewArr = [1, 2, 4, 2.5, 3, 1.5, 4.5, 5, 3.5];
  this.userArr = ['Djason I.', 'David F.', 'Daryl M.', 'Jeff L.', 'Jeffrey L.', 'Lee J.', 'Irvinton S.', 'Fuentes D.', 'Marco D.']
  this.data = [];
}

SeedReview.prototype.review = function(){
  return this.reviewArr[Math.floor(Math.random() * this.reviewArr.length)];
}

SeedReview.prototype.user = function(){
  return this.userArr[Math.floor(Math.random() * this.userArr.length)];
}

SeedReview.prototype.created = function(){
  var start = new Date(2019, 0, 1);
  var end = new Date()
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

var SeedReviewFunc = function(id, number){
  var dataArr = [];
  for(var i=0; i< number; i++){
    var seeder = new SeedReview();
    var review = seeder.review();
    var user = seeder.user();
    var created = seeder.created();
    dataArr.push([review, id, user, created])
  }

  return dataArr
}

module.exports = {
  seederProdFunc,
  SeedReviewFunc
}