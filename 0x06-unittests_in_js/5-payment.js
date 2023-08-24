const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const sum_total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${sum_total}`);
}

module.exports = sendPaymentRequestToApi;
