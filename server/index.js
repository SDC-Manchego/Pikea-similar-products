const express = require ('express');
const bodyParser = require ('body-parser');
const db = require('./../database/');
const PORT = '3000';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/products', (req, res)=>{
    db.SelectAllProduct((err, result)=>{
      if(err){
        res.status(201).json({
          error: err,
          result: []
        })
      }else{
        res.status(201).json({
          error: null,
          result: result
        })
      }
    })
})

app.get('/products/:id', (req, res)=>{
  var idParam = req.params.id;
  db.SelectProduct(idParam, (err, result)=>{
    if(err){
      res.status(201).json({
        error: err,
        result: []
      })
    }else{
      res.status(201).json({
        error: null,
        result: result
      })
    }
  })
})

app.listen(PORT, ()=>{
  console.log(`App listen on ${PORT}`);
})


