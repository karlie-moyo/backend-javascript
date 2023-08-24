#!/usr/bin/env node

/**
 * calculateNumber - accepts two arguments (number) a and b,
 * round a and b and return the sum of it.
 * @a being the first arguement
 * @b being the second arguement
 */

function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
