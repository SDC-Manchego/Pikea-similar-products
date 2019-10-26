/**
 * Pseudo-classical Function to seed product
 * 'https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/'
 */

const SeedData = function () {
  this.titleArr = [
    ['STUVA / FRITIDS', 'EKOLSUND', 'HEMNES', 'ALVINE KVIST'],
    ['VIMLE', 'IVRIG', 'KVISTBRO', 'BESTÅ', 'TRULSTORP'],
    ['KALLAX', 'DUKTIG', 'MALM', 'SEKTION', 'ASKHOLMEN'],
    ['BILLY / OXBERG', 'STOENSE', 'BLECKBERGET', 'VINTERFEST', 'NYHAMN'],
    ['FRIHETEN', 'BRATHULT', 'HOLMSUND', 'SANDBACKEN', 'HEMNES'],
    ['BALKARP', 'FÄRLÖV', 'BRIMNES', 'FLOTTEBO', 'FLEKKE'],
    ['LIDHULT', 'FYRESDAL', 'YPPERLIG', 'VALLENTUNA', 'VALLENTUNA'],
    ['KARLSTAD', 'KIVIK', 'FLOTTEBO', 'LYCKSELE LÖVÅS', 'NYHAMN'],
    ['VIMLE', 'LIDHULT', 'LIATORP', 'BESTÅ BURS', 'LACK']
  ]

  this.descArr = [
    ['Sleeper sofa', 'Sleeper sectional, 3-seat', 'Daybed with 2 drawers/2 mattresses, Twin', 'Daybed frame with 2 drawers, Twin', 'Sleeper sectional, 3-seat'],
    ['Sleeper sofa, 47 1/4', 'Daybed with 2 mattresses, Twin', 'Chaise for sleeper sectional', 'Shelf unit, 57 7/8x57 7/8\"', 'Seat section for sleeper sectional'],
    ['Cover for loveseat sleeper section', 'Wardrobe, 47 1/4x19 5/8x75 5/8 \"', 'Recliner', '6-drawer chest, 42 1/2x51 5/8 \"', 'Duvet cover and pillowcase(s), Full/Queen (Double/Queen)'],
    ['Cover f/corner sleeper sofa, 5-seat', 'Glass, 15 oz', 'Storage table, 24 \"', 'Coffee table, 45 1/4x27 1/2 \"', 'TV unit, 47 1/4x15 3/4x15\"'],
    ['Wall-mounted cabinet combination', 'Door, 23 5/8x25 1/4 ', 'Storage combination with doors', 'TV unit with doors and drawers', 'Storage combination with drawers']
  ]

  this.pricerr = [
    [22.5, 199.00, 899.00, 655.00, 449.00],
    [1190.00, 599.00, 11.99, 250.00, 119.5],
    [290.55, 229.00, 40.05, 245.12, 335.00],
    [24.99, 69.99, 39.80, 80.00, 309.00],
    [65.05, 420.12, 50.00, 89.00, 12.35]
  ]

  this.imgArr = [
    [
      'large/IKEA_LSOFA_00000.JPG', 'large/IKEA_LSOFA_00001.JPG',
      'large/IKEA_LSOFA_00002.JPG', 'large/IKEA_LSOFA_00003.JPG',
      'large/IKEA_LSOFA_00004.JPG', 'large/IKEA_LSOFA_00005.JPG',
      'large/IKEA_LSOFA_00006.JPG', 'large/IKEA_LSOFA_00007.JPG',
      'large/IKEA_LSOFA_00008.JPG', 'large/IKEA_LSOFA_00009.JPG',
      'large/IKEA_LSOFA_00010.JPG', 'large/IKEA_LSOFA_00011.JPG',
      'large/IKEA_LSOFA_00012.JPG', 'large/IKEA_LSOFA_00013.JPG',
      'large/IKEA_LSOFA_00014.JPG'
    ],
    [
      'furniture/IKEA_FURNITURE_00000.JPG',
      'furniture/IKEA_FURNITURE_00001.JPG',
      'furniture/IKEA_FURNITURE_00002.JPG',
      'furniture/IKEA_FURNITURE_00003.JPG',
      'furniture/IKEA_FURNITURE_00004.JPG',
      'furniture/IKEA_FURNITURE_00005.JPG',
      'furniture/IKEA_FURNITURE_00006.JPG',
      'furniture/IKEA_FURNITURE_00007.JPG',
      'furniture/IKEA_FURNITURE_00008.JPG',
      'furniture/IKEA_FURNITURE_00009.JPG',
      'furniture/IKEA_FURNITURE_00010.JPG',
      'furniture/IKEA_FURNITURE_00011.JPG',
      'furniture/IKEA_FURNITURE_00012.JPG',
      'furniture/IKEA_FURNITURE_00013.JPG',
      'furniture/IKEA_FURNITURE_00014.JPG'
    ],
    [
      'sofa/IKEA_SOFA00000.JPG', 'sofa/IKEA_SOFA00001.JPG',
      'sofa/IKEA_SOFA00002.JPG', 'sofa/IKEA_SOFA00003.JPG',
      'sofa/IKEA_SOFA00004.JPG', 'sofa/IKEA_SOFA00005.JPG',
      'sofa/IKEA_SOFA00006.JPG', 'sofa/IKEA_SOFA00007.JPG',
      'sofa/IKEA_SOFA00008.JPG', 'sofa/IKEA_SOFA00009.JPG',
      'sofa/IKEA_SOFA00010.JPG', 'sofa/IKEA_SOFA00011.JPG',
      'sofa/IKEA_SOFA00012.JPG', 'sofa/IKEA_SOFA00013.JPG',
      'sofa/IKEA_SOFA00014.JPG'
    ],
    [
      'slim/IKEA_SLIM_00000.JPG', 'slim/IKEA_SLIM_00001.JPG',
      'slim/IKEA_SLIM_00002.JPG', 'slim/IKEA_SLIM_00003.JPG',
      'slim/IKEA_SLIM_00004.JPG', 'slim/IKEA_SLIM_00005.JPG',
      'slim/IKEA_SLIM_00006.JPG', 'slim/IKEA_SLIM_00007.JPG',
      'slim/IKEA_SLIM_00008.JPG', 'slim/IKEA_SLIM_00009.JPG',
      'slim/IKEA_SLIM_00010.JPG', 'slim/IKEA_SLIM_00011.JPG',
      'slim/IKEA_SLIM_00012.JPG', 'slim/IKEA_SLIM_00013.JPG',
      'slim/IKEA_SLIM_00014.JPG'
    ],
    [
      'bed/IKEA_BED_00000.jpg', 'bed/IKEA_BED_00001.JPG',
      'bed/IKEA_BED_00002.JPG', 'bed/IKEA_BED_00003.JPG',
      'bed/IKEA_BED_00004.JPG', 'bed/IKEA_BED_00005.JPG',
      'bed/IKEA_BED_00006.JPG', 'bed/IKEA_BED_00007.JPG',
      'bed/IKEA_BED_00008.JPG', 'bed/IKEA_BED_00009.JPG',
      'bed/IKEA_BED_00010.JPG', 'bed/IKEA_BED_00011.JPG',
      'bed/IKEA_BED_00012.JPG', 'bed/IKEA_BED_00013.JPG',
      'bed/IKEA_BED_00014.JPG'
    ],
    [
      'chair/IKEA_CHAIR_00000.jpg', 'chair/IKEA_CHAIR_00001.jpg',
      'chair/IKEA_CHAIR_00002.JPG', 'chair/IKEA_CHAIR_00003.JPG',
      'chair/IKEA_CHAIR_00004.JPG', 'chair/IKEA_CHAIR_00005.JPG',
      'chair/IKEA_CHAIR_00006.JPG', 'chair/IKEA_CHAIR_00007.JPG',
      'chair/IKEA_CHAIR_00008.JPG', 'chair/IKEA_CHAIR_00009.JPG',
      'chair/IKEA_CHAIR_00010.JPG', 'chair/IKEA_CHAIR_00011.JPG',
      'chair/IKEA_CHAIR_00012.JPG'
    ]
  ]
};

SeedData.prototype.title = function () {
  return this.titleArr[Math.floor(Math.random() * this.titleArr.length)];
};

SeedData.prototype.description = function () {
  return this.descArr[Math.floor(Math.random() * this.descArr.length)];
};

SeedData.prototype.price = function () {
  return this.pricerr[Math.floor(Math.random() * this.pricerr.length)];
};

SeedData.prototype.images = function () {
  return this.imgArr[Math.floor(Math.random() * this.imgArr.length)];
};

SeedData.prototype.dates = function () {
  var start = new Date(2019, 0, 1);
  var end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

SeedData.prototype.randoarr = function (arr) {
  return arr[Math.floor(Math.random()* arr.length)];
};

const seederProdFunc = function (number) {
  var dataArr = [];

  for (let i = 1; i < number; i++) {
    var seeder = new SeedData();
    var imgPos = seeder.images();
    var descPos = seeder.description();
    var titlePos = seeder.title();
    var pricePos = seeder.price();

    var t=0;
    while(t<25){
      var img = `https://media-file-fec-ikea.s3.us-east-2.amazonaws.com/media/${seeder.randoarr(imgPos)}`;

      var desc = seeder.randoarr(descPos);
      var title = seeder.randoarr(titlePos);
      var price = seeder.randoarr(pricePos);
      var date = seeder.dates();
      dataArr.push([title, desc, price, img, date, i]);
      t++;
    }
  }

  return dataArr;
};


/**
 * Pseudo-classical Function to seed Reviews
 */
const SeedReview = function () {
  this.reviewArr = [1, 2, 4, 2.5, 3, 1.5, 4.5, 5, 3.5];
  this.userArr = ['Djason I.', 'David F.', 'Daryl M.', 'Jeff L.', 'Jeffrey L.', 'Lee J.', 'Irvinton S.', 'Fuentes D.', 'Marco D.'];
  this.data = [];
};

SeedReview.prototype.review = function () {
  return this.reviewArr[Math.floor(Math.random() * this.reviewArr.length)];
};

SeedReview.prototype.user = function () {
  return this.userArr[Math.floor(Math.random() * this.userArr.length)];
};

SeedReview.prototype.created = function () {
  var start = new Date(2019, 0, 1);
  var end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const SeedReviewFunc = function (number) {
  var dataArr = [];
  for (let i = 1; i < number; i++) {
    var t=0
    var seeder = new SeedReview();
    var review = seeder.review();
    var user = seeder.user();
    var created = seeder.created();
    var prod = Math.floor(Math.random()* 2500)
    while(t<5){
      dataArr.push([review, prod, user, created]);
      t++;
    }
  }

  return dataArr;
};

module.exports = {
  seederProdFunc,
  SeedReviewFunc,
};
