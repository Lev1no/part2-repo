jest.mock('../src/.internal/arrayReduce', () => jest.fn((array, iteratee, accumulator) => array.reduce(iteratee, accumulator)));

import reduce from '../src/reduce';

describe('reduce', () => {
  test('reduces array to a single value', () => {
    const array = [1, 2, 3];
    const iteratee = (sum, n) => sum + n;
    expect(reduce(array, iteratee, 0)).toBe(6);
  });

  test('handles objects', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const iteratee = (result, value, key) => {
      result[key] = value * 2;
      return result;
    };
    expect(reduce(obj, iteratee, {})).toEqual({ a: 2, b: 4, c: 6 });
  });
});
