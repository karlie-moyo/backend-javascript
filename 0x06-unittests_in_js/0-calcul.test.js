const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('Should return 4 for 1 and 3 as arguements', function () {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('Should return 5 for 1 and 3.7 as arguements', function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('Should return 5 for 1.2 and 3.7 as arguements', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('Should return 6 for 1.5 and 3.7 as arguements', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
