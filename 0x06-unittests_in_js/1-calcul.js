#!/usr/bin/env node

/**
 * calculateNumber - accepts two arguments (number) a and b
 * @type can be SUM, SUBTRACT, or DIVIDE (string)
 * @a being the first arguement
 * @b being the second arguement
 */

function calculateNumber(type, a, b) {
  const operands = {
    SUM: (a, b) => a + b,
    SUBTRACT: (a, b) => a - b,
    DIVIDE: (a, b) => (b !== 0 ? a / b : 'Error'),
  };

  return operands[type](Math.round(a), Math.round(b));
}

module.exports = calculateNumber;
