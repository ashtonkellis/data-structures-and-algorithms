'use strict';

const BinaryTree = require('../18-find-maximum-value-binary-tree/find-maximum-value-binary-tree');

let testBT = new BinaryTree();

beforeEach(() => {
  testBT = new BinaryTree();
  testBT.insert(2);
  testBT.insert(1);
  testBT.insert(3);
  console.log(JSON.stringify(testBT, null, 2)); //eslint-disable-line
});

afterEach(() => {
  testBT = null;
});

describe('BinaryTree: #findMaximumValue', () => {
  test('#findMaximumValue: simple case', () => {
    expect(BinaryTree.findMaximumValue(testBT)).toBe(3);
  });

  test('#findMaximumValue: returns undefined on empty tree', () => {
    expect(BinaryTree.findMaximumValue(new BinaryTree())).toBeUndefined();
  });

  test('#findMaximumValue: works with skewed tree', () => {
    const skewedTree = new BinaryTree();
    skewedTree.insert(1);
    skewedTree.insert(1);
    skewedTree.insert(1);
    skewedTree.insert(1);
    skewedTree.insert(1);
    
    expect(BinaryTree.findMaximumValue(skewedTree)).toBe(1);
  });
});
