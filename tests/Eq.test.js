import eq from '../src/eq';

describe('eq', () => {
  test('returns true for identical objects', () => {
    const obj = { a: 1 };
    expect(eq(obj, obj)).toBe(true);
  });

  test('returns false for different objects with same properties', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    expect(eq(obj1, obj2)).toBe(false);
  });

  test('returns true for NaN comparisons', () => {
    expect(eq(NaN, NaN)).toBe(true);
  });

  test('returns true for equivalent primitives', () => {
    expect(eq('a', 'a')).toBe(true);
    expect(eq(1, 1)).toBe(true);
  });
});
