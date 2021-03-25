const assert = require('assert');
// escreva a função sumAllNumbers aqui

const sumAllNumbers = (num) => {
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += num[i]
  }

  return sum
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);