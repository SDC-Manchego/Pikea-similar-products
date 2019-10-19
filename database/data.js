/**
 * Pseudo-classical Function to seed product
 */

var SeedData = function(){
  this.titleArr = ['FRIHETEN', 'BRATHULT', 'HOLMSUND', 'SANDBACKEN', 'HEMNES', 'BALKARP', 'FÄRLÖV', 'BRIMNES', 'FLOTTEBO', 'FLEKKE', 'LIDHULT', 'FYRESDAL', 'YPPERLIG', 'VALLENTUNA', 'VALLENTUNA', 'KARLSTAD', 'KIVIK'];

  this.descArr = ['Sleeper sofa', 'Sleeper sectional, 3-seat', 'Daybed with 2 drawers/2 mattresses, Twin', 'Daybed frame with 2 drawers, Twin', 'Sleeper sectional, 3-seat', 'Sleeper sofa, 47 1/4', 'Daybed with 2 mattresses, Twin'];

  this.pricerr = [22.5, 199.00, 899.00, 655.00, 449.00, 1190.00, 599.00, 11.99, 250.00, 119.5, 290.55];

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

  this.imgAlsoArr = [
    'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/ALSO_LIKE_IMG_01.JPG',
    'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/ALSO_LIKE_IMG_02.JPG',
    'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/ALSO_LIKE_IMG_03.JPG',
    'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/ALSO_LIKE_IMG_04.jpeg',
    'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/ALSO_LIKE_IMG_05.JPG',
    'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/ALSO_LIKE_IMG_06.jpeg',
    'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/ALSO_LIKE_IMG_07.JPG',
    'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/ALSO_LIKE_IMG_08.JPG',
    'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/ALSO_LIKE_IMG_09.JPG',
    'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/ALSO_LIKE_IMG_010.JPG',
    'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/ALSO_LIKE_IMG_11.JPG',
    'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/ALSO_LIKE_IMG_12.JPG',
    'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/ALSO_LIKE_IMG_13.JPG',
    'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/ALSO_LIKE_IMG_14.JPG',
    'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/ALSO_LIKE_IMG_15.JPG',
    'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/ALSO_LIKE_IMG_16.JPG',
    'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/ALSO_LIKE_IMG_17.JPG',
    'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/ALSO_LIKE_IMG_18.JPG',
    'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/ALSO_LIKE_IMG_19.JPG',
    'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/ALSO_LIKE_IMG_20.JPG'
  ]

  this.titleAlsoLikeArr = ['STUVA / FRITIDS', 'EKOLSUND', 'HEMNES', 'ALVINE KVIST', 'VIMLE', 'IVRIG', 'KVISTBRO', 'BESTÅ', 'TRULSTORP', 'KALLAX', 'DUKTIG', 'MALM', 'SEKTION', 'ASKHOLMEN', 'BILLY / OXBERG', 'STOENSE', 'BLECKBERGET', 'VINTERFEST']

  this.descAlsoArr = ['Chaise for sleeper sectional', 'Shelf unit, 57 7/8x57 7/8\"', 'Seat section for sleeper sectional', 'Cover for loveseat sleeper section', 'Wardrobe, 47 1/4x19 5/8x75 5/8 \"', 'Recliner', '6-drawer chest, 42 1/2x51 5/8 \"', 'Duvet cover and pillowcase(s), Full/Queen (Double/Queen)', 'Cover f/corner sleeper sofa, 5-seat', 'Glass, 15 oz', 'Storage table, 24 \"', 'Coffee table, 45 1/4x27 1/2 \"', 'TV unit, 47 1/4x15 3/4x15\"']
}

SeedData.prototype.title = function(cat){
  if(cat === 0){
    return this.titleArr[Math.floor(Math.random() * this.titleArr.length)];
  }else{
    return this.titleAlsoLikeArr[Math.floor(Math.random() * this.titleAlsoLikeArr.length)];
  }
}

SeedData.prototype.description = function(cat){
  if(cat === 0){
    return this.descArr[Math.floor(Math.random() * this.descArr.length)];
  }else{
    return this.descAlsoArr[Math.floor(Math.random() * this.descAlsoArr.length)];
  }

}

SeedData.prototype.price = function(){
  return this.pricerr[Math.floor(Math.random() * this.pricerr.length)];
}

SeedData.prototype.images = function(cat){
  if(cat === 0){
    return this.imgArr[Math.floor(Math.random() * this.imgArr.length)];
  }else{
    return this.imgAlsoArr[Math.floor(Math.random() * this.imgAlsoArr.length)];
  }
}

SeedData.prototype.dates = function(){
  var start = new Date(2019, 0, 1);
  var end = new Date()
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

var seederProdFunc = function(number, cat){
  var dataArr = [];
  for(var i=0; i< number; i++){
    var seeder = new SeedData();

    var img = seeder.images(cat);
    var price = seeder.price();
    var desc = seeder.description(cat);
    var title = seeder.title(cat);
    var date = seeder.dates();
    dataArr.push([title, desc, price, img, date, cat])
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