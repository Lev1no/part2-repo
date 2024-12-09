jest.mock('../src/.internal/createCaseFirst', () => jest.fn(() => (str) => str.charAt(0).toUpperCase() + str.slice(1)));

import upperFirst from '../src/upperFirst';

describe('upperFirst', () => {
  test('converts the first character to uppercase', () => {
    expect(upperFirst('hello')).toBe('Hello');
  });

  test('does not modify an already uppercase first character', () => {
    expect(upperFirst('Hello')).toBe('Hello');
  });
});
