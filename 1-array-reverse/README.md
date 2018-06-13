#Reverse an Array

## Challenge
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return the provided array argument with elements in reversed order.

## Whiteboarding Solution: 
![alt text](https://raw.githubusercontent.com/ashtonkellis/data-structures-and-algorithms/array-reverse/assets/1-array-reverse.jpg)

## Code Solution
function reverseArray(inputArr) {
  const n = inputArr.length;
  const outputArr = new Array (n);

  for (let i = 0; i < n; i++) {
    let j = n - 1 - i;
    outputArr[j] = inputArr[i];
  }

  return outputArr;
}