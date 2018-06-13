'use strict';

const largestProduct = module.exports = (matrix) => { // eslint-disable-line
  let maxValue = 0;

  function fetchVal(x, y) {
    if (x < 0) return 0;
    if (x > matrix.length - 1) return 0;
    if (y < 0) return 0;
    if (y > matrix[0].length - 1) return 0;

    return matrix[x][y];
  }

  if (matrix.reduce((acc, cur) => acc.concat(cur), []).some(e => typeof e !== 'number')) {
    throw new Error('Matrix must contain only numbers');
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
