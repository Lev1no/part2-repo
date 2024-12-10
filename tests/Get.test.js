jest.mock('../src/.internal/baseGet', () => jest.fn(() => 3));

import get from '../src/get';

describe('get', () => {
  test('retrieves value at the specified path', () => {
    const obj = { a: [{ b: { c: 3 } }] };
    expect(get(obj, 'a[0].b.c')).toBe(3);
  });

  test('returns defaultValue for undefined path', () => {
    const obj = { a: [{ b: { c: 3 } }] };
    expect(get(obj, 'a.b.c', 'default')).toBe('default');
  });

  test('handles null objects', () => {
    expect(get(null, 'a.b.c', 'default')).toBe('default');
  });

  test('returns undefined for empty path', () => {
    const obj = { a: { b: 3 } };
    expect(get(obj, '', 'default')).toBe('default');
  });

  test('returns defaultValue for intermediate undefined keys', () => {
    const obj = { a: { b: 3 } };
    expect(get(obj, 'a.c.d', 'default')).toBe('default');
  });

  test('does not return defaultValue for falsy values', () => {
    const obj = { a: { b: 0 } };
    expect(get(obj, 'a.b', 'default')).toBe(0); // 0 is valid, should not fallback to default.
  });

  test('retrieves value with array path', () => {
    const obj = { a: [{ b: { c: 3 } }] };
    expect(get(obj, ['a', '0', 'b', 'c'])).toBe(3);
  });
});
