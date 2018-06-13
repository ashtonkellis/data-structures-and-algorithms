'use strict';

const largestProduct = require('./../3-array-adjacent-product/array-adjacent-product');

describe('#reverseAray', () => {
  test('#reverseAray: returns correct value', () => {
    const testArr = [
      [1, 2, 1],
      [2, 4, 2],
      [3, 6, 8],
      [7, 8, 1],
    ];
    expect(largestProduct(testArr)).toBe(64);
  });

  test('#reverseAray: throws error if non-numbers are present', () => {
    const testArr = [
      ['a', 2, 1],
      [2, 4, 2],
      [3, 6, 8],
    ];
    expect(() => {
      largestProduct(testArr);
    }).toThrow();
  });
});
