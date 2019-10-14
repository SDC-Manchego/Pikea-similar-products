//require iconv-lite to resolve problem with mysql modul
require('iconv-lite').encodingExists('foo');
const request = require('request')
const mysql = require('mysql2');
const env = process.env.NODE_ENV || 'test';
const config = require('./../database/config.json')[env];
const dataSeed = require('./../database/data.js');
var connection;

beforeAll((done)=>{
  connection = mysql.createConnection({
    host: config.host,
    user: config.username,
    password: config.password,
    database: config.database
  });
  connection.connect();
  // Empty data table before test
  connection.query('SET FOREIGN_KEY_CHECKS = 0', done);
  connection.query('TRUNCATE TABLE ' + 'similar_reviews', done);
  connection.query('TRUNCATE TABLE ' + 'similar_products', done);
  connection.query('SET FOREIGN_KEY_CHECKS = 1', done);
});

afterAll(()=>{
  //end connection
  connection.end();
})

describe("Test Insert product ", ()=>{
  test("First step with Jest (SUM)", async ()=>{
    expect(1+1).toBe(2);
  });

  test("Test table product to be empty & error null", async ()=>{
    connection.query('SELECT * FROM similar_reviews', (err, result)=>{
      expect(result).toEqual([])
      expect(err).toEqual(null)
    });
  });

  test("Test table review to be empty & error null", async ()=>{
    connection.query('SELECT * FROM similar_products', (err, result)=>{
      expect(result).toEqual([])
      expect(err).toEqual(null)
    });
  });
});


describe('SHOULD INSERT BULK DATA IN PRODUCT TABLE', ()=>{
  var arrProdSeed = dataSeed.seederProdFunc(100);
  test('INSERT PRODUCT', async ()=>{
    connection.query('INSERT INTO similar_products (title_similar, desc_similar, price_similar, img_similar, created_similar) VALUES ?', [arrProdSeed], (err, result)=>{
      expect(typeof result).toBe('object');
      expect(result.affectedRows).toEqual(100);
    });
  })

  test('INSERT REVIEW', async ()=>{
    var arrProdSeed = dataSeed.SeedReviewFunc(1, 3);
    connection.query('INSERT INTO similar_reviews (review_value, reviewProductID, user_review, created_sreview) VALUES ?', [arrProdSeed], (err, result)=>{
      expect(typeof result).toBe('object');
      expect(result.affectedRows).toEqual(3);
    });
  })
})

describe('SHOULD TEST GET REQUEST', ()=>{
  test('GET PRODUCT', async ()=>{
    request.
    get('http://127.0.0.1:3000/products/').
    on('response', (response)=>{

      expect(response.statusCode).toEqual(201);

      response.on('data', (data)=>{
        var result = JSON.parse(data);
        expect(typeof result).toBe('object');
        expect(result.result.length).toEqual(25);
        expect(result.error).toEqual(null)
      })
    });
  });
});



/*
const cp = require('child_process');
const path = require('path');
var func = (callback)=>{
  cp.exec(`mysql -u${user} -p${pswd} -h${host} < ${dbtest}`, (err, stdout, stderr) => {
    if (err) {
      callback(`exec error: ${err}`);
      return ;
    }else{
      callback(`The import has finished.`);
      return ;
    }
  });
}
*/