import map from '../src/map';

describe('map', () => {
  test('maps each element to a new value', () => {
    const array = [1, 2, 3];
    const iteratee = (x) => x * 2;
    expect(map(array, iteratee)).toEqual([2, 4, 6]);
  });

  test('handles empty arrays', () => {
    const array = [];
    const iteratee = (x) => x * 2;
    expect(map(array, iteratee)).toEqual([]);
  });
});
