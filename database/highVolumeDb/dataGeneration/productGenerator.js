const faker = require('faker');

class ProductGenerator {
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getProductTitle() {
    return faker.commerce.productName();
  }

  getProductDescription() {
    return faker.lorem.sentence();
  }

  getProductPrice() {
    return faker.commerce.price()
  }

  getImageUrl() {
    return faker.image.cats();
  }

  getProductCreationDate() {
    return faker.date.past();
  }

  getRelatedProductId() {
    return this.getRandomInt(1, 100000);
  }

  generateCsvHeader() {
    return ['product_title', 'product_description', 'price', 'img_url', 'create_date', 'related_product_id'];
  }

  generateProducts(numProducts) {
    let products = [];
    for (let i = 0; i < numProducts; i++) {
      let product = [
        this.getProductTitle(),
        this.getProductDescription(),
        this.getProductPrice(),
        this.getImageUrl(),
        this.getProductCreationDate(),
        this.getRelatedProductId(),
      ];
      products.push(product);
    }
    return products;
  }
}

module.exports = new ProductGenerator();
