'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    return this;
  }

  shift() {
    if (!this.head) return null;
    
    const firstNode = this.head;
    this.head = firstNode.next;
    return firstNode;
  }

  static merge(linkedList1, linkedList2) {
    const mergedLL = new LinkedList();

    while (linkedList1.head || linkedList2.head) {
      if (linkedList1.head) mergedLL.append(linkedList1.shift().value);
      if (linkedList2.head) mergedLL.append(linkedList2.shift().value);
    }

    return mergedLL;
  }
};
