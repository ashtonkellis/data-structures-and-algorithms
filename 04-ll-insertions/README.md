# Linked List Insertions

## Challenge
Write the following methods for the Linked List class:

.append(value) which adds a new node with the given value to the end of the list
.insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
.insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node

## Whiteboarding Solution: 
![alt text](https://raw.githubusercontent.com/ashtonkellis/data-structures-and-algorithms/master/assets/04-ll-insertions.jpg)

## Code Solution
```
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

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);

    if (!this.head) return null;

    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return this;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  insertAfter(value, newValue) {
    if (!this.head) return null;

    const newNode = new Node(newValue);

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return this;
      }
      currentNode = currentNode.next;
    }

    if (currentNode.value === value) {
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      return this;
    }

    return null;
  }
};
```
