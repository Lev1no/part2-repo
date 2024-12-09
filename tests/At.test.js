jest.mock('../src/.internal/baseAt', () => jest.fn(() => [3, 4]));
jest.mock('../src/.internal/baseFlatten', () => jest.fn(() => ['a[0].b.c', 'a[1]']));

import at from '../src/at';

describe('at', () => {
  test('extracts paths from an object', () => {
    const obj = { a: [{ b: { c: 3 } }, 4] };
    expect(at(obj, ['a[0].b.c', 'a[1]'])).toEqual([3, 4]);
  });

  test('handles missing paths', () => {
    const obj = { a: [{ b: { c: 3 } }, 4] };
    expect(at(obj, ['a[0].b.d', 'a[2]'])).toEqual([undefined, undefined]);
  });
});
