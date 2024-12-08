const eq = require('../src/eq');

test('checks if two values are equal', () => {
  const result = eq(5, 5); // Call the eq function
  expect(result).toBe(true); // Verify the result
});
