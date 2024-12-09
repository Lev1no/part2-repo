import filter from '../src/filter';

describe('filter', () => {
  test('filters elements based on predicate', () => {
    const array = [1, 2, 3, 4];
    const predicate = (x) => x > 2;
    expect(filter(array, predicate)).toEqual([3, 4]);
  });

  test('returns empty array for no match', () => {
    const array = [1, 2];
    const predicate = (x) => x > 5;
    expect(filter(array, predicate)).toEqual([]);
  });

  test('handles empty arrays', () => {
    const array = [];
    const predicate = (x) => x > 0;
    expect(filter(array, predicate)).toEqual([]);
  });
});
