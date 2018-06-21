'use strict';

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

  static merge(linkedList1, linkedList2) {
    let currentNode = linkedList1.head;
    let incomingNode = linkedList2.head;
  
    linkedList2.head = incomingNode.next;
    incomingNode.next = currentNode.next;
    currentNode.next = incomingNode;

    while (!linkedList2.head) {
      currentNode = currentNode.next.next;
      incomingNode.next = currentNode.next;
      currentNode.next = incomingNode;
    } 
    
    // return linkedList1.head;
  }
};
