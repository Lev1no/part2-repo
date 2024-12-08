const filter = require('../src/filter');

test('filters elements based on a predicate', () => {
  const array = [1, 2, 3, 4];
  const predicate = (x) => x > 2;
  const result = filter(array, predicate); // Call the filter function
  expect(result).toEqual([3, 4]); // Verify the result
});
