const keys = require('../src/keys');

test('gets all keys of an object', () => {
  const obj = { a: 1, b: 2 };
  const result = keys(obj); // Call the keys function
  expect(result).toEqual(['a', 'b']); // Verify the result
});
