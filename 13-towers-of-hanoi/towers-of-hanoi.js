'use strict';

module.exports = class TowersOfHanoi {
  constructor(discQuantity) {
    this.stackA = [];
    this.stackB = [];
    this.stackC = [];

    for (let i = 0; i < discQuantity; i++) {
      this.stackA.unshift(i);
    }
    this.stacks = [this.stackC, this.stackB, this.stackA];
  };
    
  // moveDiscs() {
  //   while (stackA.length && stackB.length) {
  //   }
  // }
}