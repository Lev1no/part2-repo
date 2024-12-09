import add from '../src/add';

describe('add', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds a positive and negative number', () => {
    expect(add(5, -3)).toBe(2);
  });

  test('adds zero', () => {
    expect(add(0, 5)).toBe(5);
  });

  test('adds negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });
});
