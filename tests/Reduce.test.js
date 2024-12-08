const reduce = require('../src/reduce');

test('reduces array to a single value', () => {
  const array = [1, 2, 3, 4];
  const result = reduce(array, (sum, x) => sum + x, 0); // Call the reduce function
  expect(result).toBe(10); // Verify the result
});
