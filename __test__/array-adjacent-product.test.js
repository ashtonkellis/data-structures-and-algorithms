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

  test('#reverseArray: throws error if non-numbers are present', () => {
    const testArr = [
      ['a', 2, 1],
      [2, 4, 2],
      [3, 6, 8],
    ];
    expect(() => {
      largestProduct(testArr);
    }).toThrow();
  });

  test('#reverseArray: throws error if index sizes are not equal', () => {
    const testArr = [
      [1, 2, 1, 5],
      [2, 4, 2],
      [3, 6, 8],
    ];
    expect(() => {
      largestProduct(testArr);
    }).toThrow();
  });
});
