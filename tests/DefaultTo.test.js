import defaultTo from '../src/defaultTo';

describe('defaultTo', () => {
  test('returns value if it is not null or undefined', () => {
    expect(defaultTo(1, 10)).toBe(1);
  });

  test('returns defaultValue if value is undefined', () => {
    expect(defaultTo(undefined, 10)).toBe(10);
  });

  test('returns defaultValue if value is null', () => {
    expect(defaultTo(null, 10)).toBe(10);
  });

  test('returns defaultValue if value is NaN', () => {
    expect(defaultTo(NaN, 10)).toBe(10);
  });
});
