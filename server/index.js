const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require ('path')
const db = require('./../database/');

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
      res.status(200).json({
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

app.get('/products/similar/:id', (req, res) => {
  let idParam = req.params.id;
  db.SelectAllProduct(idParam, (err, result) => {
    if (err) {
      res.status(200).json({
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

app.get('/products/alsolike/', (req, res) => {
  let idParam = '2';
  db.SelectAllSimilar(idParam, (err, result) => {
    if (err) {
      res.status(200).json({
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

app.get('/products/alsolike/:id', (req, res) => {
  let idParam = req.params.id;
  db.SelectAllSimilar(idParam, (err, result) => {
    if (err) {
      res.status(200).json({
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

app.post('/products', (req, res) => {
  let { products } = req.body;
  db.InsertBulkProduct(products, (err, result) => {
    if (err) {
      res.status(200).json({
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
      res.status(200).json({
        error: err,
        result: 'Error saving Reviews'
      })
    } else {
      res.send('Review(s) saved.');
    }
  });
});

app.put('/products/:id', (req, res) => {
  res.send(`Received request to update product ${req.params.id}`);
});

app.put('/reviews/:id' , (req, res) => {
  res.send(`Received request to update review ${req.params.id}`);
})

app.delete('/products/:id', (req, res) => {
  let productId = req.params.id;
  db.deleteProduct(productId, (err, result) => {
    if (err) {
      res.status(200).json({
        error: err,
        result: 'Error deleting product',
      });
    } else {
      res.send('Product deleted');
    }
  });
  // res.send(`Recieved request to delete product ${req.params.id}`);
});

app.delete('/reviews/:id', (req, res) => {
  res.send(`Received request to delete review ${req.params.id}`);
})
app.listen(PORT, () => {
  console.log(`App listen on ${PORT}`);
});
