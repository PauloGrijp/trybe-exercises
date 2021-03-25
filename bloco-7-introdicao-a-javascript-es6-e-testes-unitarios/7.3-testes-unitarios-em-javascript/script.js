const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

const testSum1 = sum("4",5)
const testSum2 = sum(0,0)

assert.strictEqual(testSum1, 9, '4 + 5 = 9')
assert.strictEqual(testSum2, 0, '0 + 0 = 0')
assert.strictEqual(testSum1, 0, 'valores não são srictus')