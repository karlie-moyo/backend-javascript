const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('called stubbed version of calculateNumber', function () {
    const spy = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);

    assert(spy.calledOnceWith('The total is: 10'));
    assert(stub.calledOnceWith('SUM', 100, 20));

    spy.restore();
    stub.restore();
  });
});
