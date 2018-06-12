function reverseArray(inputArr) {
  const n = inputArr.length;
  const outputArr = new Array (n);

  for (let i = 0; i < n; i++) {
    let j = n - 1 - i;
    outputArr[j] = inputArr[i];
  }

  return outputArr;
}
