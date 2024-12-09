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
});
