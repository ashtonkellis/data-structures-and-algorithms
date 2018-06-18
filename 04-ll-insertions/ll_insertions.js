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
