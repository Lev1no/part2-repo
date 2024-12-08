const map = require('../src/map');

test('maps each element to a new value', () => {
  const array = [1, 2, 3];
  const result = map(array, (x) => x * 2); // Call the map function
  expect(result).toEqual([2, 4, 6]); // Verify the result
});
