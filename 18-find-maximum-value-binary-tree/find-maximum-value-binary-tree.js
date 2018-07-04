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
  
  static findMaximumValue(tree) {
    if (tree.root) return BinaryTree.findMaximumValue(tree.root);
    console.log(JSON.stringify(tree, null, 2));
    
    if (!tree.left && !tree.right) return tree.value;

    let left = -Infinity;
    let right = -Infinity;

    if (tree.left) left = BinaryTree.findMaximumValue(tree.left);
    if (tree.right) right = BinaryTree.findMaximumValue(tree.right);

    console.log(tree.value, left, right);
    return Math.max(tree.value, left, right);
  }
};
