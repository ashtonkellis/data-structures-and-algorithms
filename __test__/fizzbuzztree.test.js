'use strict';

const BinaryTree = require('../16-fizz-buzz-tree/fizzbuzztree');

let testBT;

beforeEach(() => {
  testBT = new BinaryTree();
  testBT.insert(8);
  testBT.insert(9);
  testBT.insert(3);
  testBT.insert(5);
  testBT.insert(15);
  console.log(JSON.stringify(testBT, null, 2));
});

afterEach(() => {
  testBT = null;
});

describe('BinaryTree #FizzBuzz', () => {
  test('#FizzBuzzTree: simple case', () => {
    BinaryTree.FizzBuzzTree(testBT);
    console.log(JSON.stringify(testBT, null, 2)); // eslint-disable-line
    expect(testBT.root.value).toBe(8);
    expect(testBT.root.left.value).toBe('fizz');
    expect(testBT.root.right.value).toBe('fizz');
    expect(testBT.root.left.right.value).toBe('buzz');
    expect(testBT.root.right.right.value).toBe('fizzbuzz');
  });

  test('#FizsBuzzTree: returns instance of BinaryTree', () => {
    expect(BinaryTree.FizzBuzzTree(testBT)).toBeInstanceOf(BinaryTree);
  });

  test('#FizzBuzzTree: does not modify original tree', () => {
    const myTree = testBT;
    BinaryTree.FizzBuzzTree(testBT);
    expect(myTree).toBe(testBT);
  });
});
