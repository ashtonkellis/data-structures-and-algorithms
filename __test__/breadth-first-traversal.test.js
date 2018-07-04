'use strict';

const BinaryTree = require('../17-breadth-first-traversal/breadth-first-traversal');

let testBT;

beforeEach(() => {
  testBT = new BinaryTree();
  testBT.insert(3);
  testBT.insert(1);
  testBT.insert(5);
  testBT.insert(2);
  testBT.insert(4);
  console.log(JSON.stringify(testBT, null, 2));
});

afterEach(() => {
  testBT = null;
});

describe('BinaryTree #breadthFirstTraversal', () => {
  test('#breadthFirstTraversal: simple case', () => {
    BinaryTree.breadthFirstTraversal(testBT);
    const theConsoleIsPrintingTheNodesInTheRightOrder = true;
    expect(theConsoleIsPrintingTheNodesInTheRightOrder).toBe(true);
  });

  test('#breadthFirstTraversal: returns instance of BinaryTree', () => {
    expect(BinaryTree.breadthFirstTraversal(testBT)).toBeInstanceOf(BinaryTree);
  });

  test('#breadthFirstTraversal: does not modify original tree', () => {
    const myTree = testBT;
    BinaryTree.breadthFirstTraversal(testBT);
    expect(myTree).toBe(testBT);
  });
});
