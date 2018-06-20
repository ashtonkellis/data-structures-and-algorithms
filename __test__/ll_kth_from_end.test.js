'use strict';

const LinkedList = require('./../07-kth-from-end/ll_kth_from_end');

describe('Linked List kth-from-end testing', () => {
  let testLL;

  beforeEach((() => {
    testLL = new LinkedList();
  }));

  afterEach(() => {
    testLL = null;
  });

  test('#append', () => {
    testLL.append(1);
    testLL.append(2);
    testLL.append(3);
    console.log(testLL);
  });
});
