# Linked List Insertions

## Challenge
Write a function called mergeLists which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the single list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Whiteboarding Solution: 
![alt text](https://raw.githubusercontent.com/ashtonkellis/data-structures-and-algorithms/master/assets/08-ll-merge.jpg)

## Code Solution
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
