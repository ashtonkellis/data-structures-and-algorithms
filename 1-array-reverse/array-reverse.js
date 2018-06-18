'use strict';

function reverseArray(inputArr) { // eslint-disable-line
  const n = inputArr.length;
  const outputArr = new Array(n);

  for (let i = 0; i < n; i++) {
    const j = n - 1 - i;
    outputArr[j] = inputArr[i];
  }

  return outputArr;
}
