'use strict';

module.exports = class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.lastOnTop = [];
    this.firstOnTop = [];
    this.length = 0;
  }

  enqueue(value) {
    if (!this.lastOnTop.length) {
      this.front = value;
    }
    
    this.length += 1;
    this.back = value;
    this.lastOnTop.push(value);

    return this.length;
  }

  dequeue() {
    let poppedValue = this.lastOnTop.pop();

    while (poppedValue) {
      this.firstOnTop.push(poppedValue);
      poppedValue = this.lastOnTop.pop();
    }

    const firstInLine = this.firstOnTop.pop();
    let nextInLine = this.firstOnTop.pop();
    
    this.front = nextInLine || null;

    while (nextInLine) {
      this.lastOnTop.push(nextInLine);
      nextInLine = this.firstOnTop.pop();
    }
    return firstInLine;
  }
};
