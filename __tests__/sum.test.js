// sum.test.js


test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

// import sum function from other file
const sum = require('../code-to-unit-test/sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});