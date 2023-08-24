const express = require('express');
const app = express();
const port = 7865;

app.get('/', function (req, res) {
  res.statusCode = 200;
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', function (req, res) {
  res.statusCode = 200;
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.listen(port, function () {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
