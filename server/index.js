const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./../database/');

const PORT = '3000';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../public/`));
app.use(express.static(`${__dirname}/../client/src/css`));
// Enable All CORS Requests
app.use(cors());

app.get('/products/similar', (req, res) => {
  db.SelectAllProduct(0, (err, result) => {
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

app.get('/products/alsolike', (req, res) => {
  db.SelectAllProduct(1, (err, result) => {
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
  const idParam = req.params.id;
  db.SelectProduct(idParam, (err, result) => {
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
