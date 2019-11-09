require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require ('path')
const postgresModel = require('../database/highVolumeDb/postgresModel/model.js');
const cassandraModel = require('../database/highVolumeDb/cassandra/model.js');
const morgan = require('morgan')

const PORT = '3000';
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Enable All CORS Requests
app.use(cors());

const public = path.join(__dirname, '/../public/');
app.use(express.static(public));
app.use('/:id',express.static(public));

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
    console.log(err)
    res.status(404).json({
      error: err,
      result: [],
    });
  } 
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
/////////Update For postgres later ////////////
app.post('/products', async (req, res) => {
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

app.listen(PORT, () => {
  console.log(`App listen on ${PORT}`);
});
