const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require ('path')
// const db = require('./../database/');
const postgresModel = require('../database/highVolumeDb/postgresModel/model.js');
const cassandraModel = require('../database/highVolumeDb/cassandra/model.js');
const PORT = '3000';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Enable All CORS Requests
app.use(cors());

const public = path.join(__dirname, '/../public/');
app.use(express.static(public));
app.use('/:id',express.static(public));

app.get('/products/similar/', (req, res) => {
  let idParam = '1';
  db.SelectAllProduct(idParam, (err, result) => {
    if (err) {
      res.status(400).json({
        error: err,
        result: [],
      });
    } else {
      res.status(200).json({
        error: null,
        result,
      });
    }
  });
});
// suggests random products that are from the same category as the product currently being viewed
app.get('/products/similar/:id', async (req, res) => {
  let idParam = req.params.id;
  try {
    const { rows } = await cassandraModel.getRelatedProducts(idParam);
    res.json({
      error: null,
      result: rows,
    });
  } catch (err) {
    res.status(404).json({
      error: err,
      result: [],
    });
  } 
});

app.get('/products/alsolike/', (req, res) => {
  let idParam = '2';
  db.SelectAllSimilar(idParam, (err, result) => {
    if (err) {
      res.status(400).json({
        error: err,
        result: [],
      });
    } else {
      res.status(200).json({
        error: null,
        result,
      });
    }
  });
});

// suggests random products that are from a different category than the product currently being viewed
app.get('/products/alsolike/:id', async (req, res) => {
  let idParam = req.params.id;
  let suggestedCategory;
  do {
    suggestedCategory = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
  } while (suggestedCategory === idParam)
  try {
    const { rows } = await cassandraModel.getRelatedProducts(suggestedCategory);
    res.json({
      error: null,
      result: rows,
    });
  } catch (err) {
    res.status(404).json({
      error: err,
      result: null
    })
  }
});

app.post('/products', (req, res) => {
  let { products } = req.body;
  db.InsertBulkProduct(products, (err, result) => {
    if (err) {
      res.status(400).json({
        error: err,
        result: 'Error saving products',
      });
    } else {
      res.send('Product(s) saved.')
    }
  });
  // res.send('Post request to /products received');
});

app.post('/reviews', (req, res) => {
  let { reviews } = req.body;
  db.InsertBulkReviews(reviews, (err, result) => {
    if (err) {
      res.status(400).json({
        error: err,
        result: 'Error saving Reviews'
      })
    } else {
      res.send('Review(s) saved.');
    }
  });
});

app.put('/products/:id', (req, res) => {
  let { updates } = req.body;
  let productId = req.params.id;
  db.updateProduct(productId, updates, (err, results) => {
    if (err) {
      res.status(400).json({
        error: err,
        result: 'Error updating product ',
      })
    } else {
      res.send('Product Updated');
    }
  });
});

app.put('/reviews/:id' , (req, res) => {
  let { updates } = req.body;
  let productId = req.params.id;
  db.updateReview(productId, updates, (err, results) => {
    if (err) {
      res.status(400).json({
        error: err,
        result: 'Error updating review',
      });
    } else {
      res.send('Review Updated');
    }
  })
})

app.delete('/products/:id', (req, res) => {
  let productId = req.params.id;
  db.deleteProduct(productId, (err, result) => {
    if (err) {
      res.status(400).json({
        error: err,
        result: 'Error deleting product',
      });
    } else {
      db.deleteReviewsByProductId(productId, (err, result) => {
        if (err) {
          res.status(400).json({
            error: err,
            result: 'Error deleting product',
          });
        } else {
          res.send('Product deleted');
        }
      });
    }
  });
});

app.delete('/reviews/:id', (req, res) => {
  let reviewId = req.params.id;
  db.deleteReview(reviewId, (err, results) => {
    if (err) {
      res.status(400).json({
        error: err,
        result: 'Error deleting review'
      });
    } else {
      res.send('Review deleted')
    }
  });
});

app.listen(PORT, () => {
  console.log(`App listen on ${PORT}`);
});
