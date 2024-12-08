const upperFirst = require('../src/upperFirst');

test('converts the first character of a string to uppercase', () => {
  const result = upperFirst('hello'); // Call the upperFirst function
  expect(result).toBe('Hello'); // Verify the result
});
