const express = require('express');
const app = express();
const port = 7865;

app.get('/', function (req, res) {
  res.statusCode = 200;
  res.send('Welcome to the payment system');
});

app.listen(port, function () {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
