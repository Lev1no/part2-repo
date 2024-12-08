const get = require('../src/get');

test('gets value from an object using a path', () => {
  const obj = { a: { b: 2 } };
  const result = get(obj, 'a.b'); // Call the get function
  expect(result).toBe(2); // Verify the result
});
