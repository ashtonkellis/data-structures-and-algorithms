# Array Adjacent Product

## Challenge
Write a function called LargestProduct which takes in a 2D array, of arbitrary size.
Without utilizing any of the built-in methods available to your language, return the largest product of 2 adjacent values within the 2D array.
Adjacent values might be horizontally, vertically, or diagonally connected.

## Whiteboarding Solution: 
![alt text](https://raw.githubusercontent.com/ashtonkellis/data-structures-and-algorithms/master/assets/3-array-adjacent-product.jpg)

## Code Solution
const largestProduct = module.exports = (matrix) => { // eslint-disable-line
  if (matrix.reduce((acc, cur) => acc.concat(cur), []).some(e => typeof e !== 'number')) {
    throw new Error('Matrix must contain only numbers');
  }

  if (matrix.map(row => row.length).some((num, i, w) => num !== w[0])) {
    throw new Error('All rows must be of the same length');
  }

  let maxValue = 0;

  function fetchVal(x, y) {
    if (x < 0) return 0;
    if (x > matrix.length - 1) return 0;
    if (y < 0) return 0;
    if (y > matrix[0].length - 1) return 0;

    return matrix[x][y];
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const currentNum = matrix[i][j];
      const neighbors = [
        fetchVal(i - 1, j - 1),
        fetchVal(i - 1, j),
        fetchVal(i - 1, j + 1),
        fetchVal(i, j - 1),
        fetchVal(i, j + 1),
        fetchVal(i + 1, j - 1),
        fetchVal(i + 1, j),
        fetchVal(i + 1, j + 1),
      ];

      maxValue = neighbors
        .map(neighbor => neighbor * currentNum)
        .reduce((acc, cur) => Math.max(acc, cur), maxValue);
    }
  }

  return maxValue;
};
