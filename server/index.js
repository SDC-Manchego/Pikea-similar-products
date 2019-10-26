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

app.listen(PORT, () => {
  console.log(`App listen on ${PORT}`);
});
