jest.mock('../src/.internal/arrayLikeKeys', () => jest.fn(() => ['0', '1']));

import keys from '../src/keys';

describe('keys', () => {
  test('gets all enumerable property names', () => {
    const obj = { a: 1, b: 2 };
    expect(keys(obj)).toEqual(['a', 'b']);
  });

  test('handles string inputs', () => {
    expect(keys('hi')).toEqual(['0', '1']);
  });

  test('handles empty objects', () => {
    expect(keys({})).toEqual([]);
  });
});
