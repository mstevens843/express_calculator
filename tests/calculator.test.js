const { calculateMean, calculateMedian, calculateMode } = require('../calculator');

describe('Statistical Calculations', () => {
  test('calculateMean should return the correct mean', () => {
    const result = calculateMean([1, 2, 3, 4, 5]);
    expect(result).toBe(3);
  });

  test('calculateMedian should return the correct median for odd number of elements', () => {
    const result = calculateMedian([1, 3, 2, 5, 4]);
    expect(result).toBe(3);
  });

  test('calculateMedian should return the correct median for even number of elements', () => {
    const result = calculateMedian([1, 2, 3, 4]);
    expect(result).toBe(2.5);
  });

  test('calculateMode should return the correct mode', () => {
    const result = calculateMode([1, 1, 2, 3, 3, 3]);
    expect(result).toEqual([3]);
  });

  test('calculateMode should return null when there is no mode', () => {
    const result = calculateMode([1, 2, 3, 4]);
    expect(result).toBe(null);
  });
});
