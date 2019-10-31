const faker = require('faker');

class ReviewGenerator {
  generateCsvHeader() {
    return ['review_score', 'product_id', 'review_text', 'date'];
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getReviewScore() {
    return this.getRandomInt(1, 5);
  }

  getReviewText() {
    return faker.lorem.words();
  }

  getReviewDate(){
    return faker.date.past();
  }

  getAssociatedProductId() {
    return this.getRandomInt(1, 10000000);
  }

  generateReviews(numReviews) {
    let reviews = [];
    for (let i = 0; i < numReviews; i++) {
      let review = [
        this.getReviewScore(),
        this.getAssociatedProductId(),
        this.getReviewText(),
        this.getReviewDate()
      ];
      reviews.push(review);
    }
    return reviews;
  }
}
// let reviewGenerator = new ReviewGenerator();
// let reviews = reviewGenerator.generateReviews(10);
// console.log(reviews, reviewGenerator.generateCsvHeader());

module.exports = new ReviewGenerator();


