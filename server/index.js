const express = require('express');
const app = express();
const path = require('path');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000
app.use(volleyball);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//serve up static files
app.use(express.static(path.resolve(__dirname, '..', 'client')));
app.use(express.static(path.resolve(__dirname, '..', 'node_modules')));


app.post('/get-products', function (request, response){

  let amazon = require('amazon-product-api');
  let client = amazon.createClient({
    awsId: "AKIAJ4HL7C5FSZSHJZ4A",
    awsSecret: "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",
    awsTag: "upworktest-20"
  });

  client.itemSearch({
    keywords: request.body.searchValue,
  }).then(function(results){
    response.json(results);
  }).catch(function(err){
    response.json(err);
  });
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});


// handle every other route with index.html, which will contain
// a script tag to our application's JavaScript file(s).
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'))
});

app.listen(PORT, function () {
  console.log("Using " + PORT + " port now!");
});


