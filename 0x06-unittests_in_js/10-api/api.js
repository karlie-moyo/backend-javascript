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

app.get('/available_payments', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.statusCode = 200;
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post('/login', (req, res) => {
  const userName = req.body.userName;
  if (userName) {
    res.statusCode = 200;
    res.send(`Welcome ${userName}`);
  } else {
    res.status(404).send();
  }
});

app.listen(port, function () {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
