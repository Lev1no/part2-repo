const filter = require('../src/filter');

test('filters array (placeholder)', () => {
  const result = filter([1, 2, 3, 4], (x) => x > 2); // Call the function
  expect(result).toEqual([3, 4]); // Validate the result
});
