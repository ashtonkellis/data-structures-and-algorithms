# Linked List Insertions

## Challenge
Write a method for the Linked List class which takes a number, k, as a parameter. Return the node that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges. ​

## Whiteboarding Solution: 
![alt text](https://raw.githubusercontent.com/ashtonkellis/data-structures-and-algorithms/master/assets/07-kth-from-end.jpg)

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

  kthFromEnd(k) {    
    if (!this.head) return null;
    
    let currentNode = this.head;
    let endNode = this.head;

    for (let i = 0; i < k; i++) {
      if (endNode.next === null) return null;
      endNode = endNode.next;
    }

    if (!endNode.next) return currentNode.value;

    while (endNode.next) {
      currentNode = currentNode.next;
      endNode = endNode.next;
      if (!endNode.next) return currentNode.value;
    }

    return null;
  }
};
