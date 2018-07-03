'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.value) {
      if (!this.left) {
        this.left = new Node(value);
      } else {
        this.left.insert(value);
      }
    }

    if (value > this.value) {
      if (!this.right) {
        this.right = new Node(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

module.exports = class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.root.insert(value);
    }
  }
  
  static FizzBuzzTree(tree) {
    // console.log(JSON.stringify(tree, null, 2));
    if (tree.root) BinaryTree.FizzBuzzTree(tree.root);
    if (!tree.value) return tree;
    
    if (tree.value % 3 === 0 && tree.value % 5 === 0) tree.value = 'fizzbuzz';
    if (tree.value % 3 === 0) tree.value = 'fizz';
    if (tree.value % 5 === 0) tree.value = 'buzz';
    
    if (tree.left) BinaryTree.FizzBuzzTree(tree.left);
    if (tree.right) BinaryTree.FizzBuzzTree(tree.right);
    return undefined;
  }
};
