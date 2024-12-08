const defaultTo = require('../src/defaultTo');

test('returns default value when input is null or undefined', () => {
  const result = defaultTo(undefined, 'default'); // Call the defaultTo function
  expect(result).toBe('default'); // Verify the result
});
