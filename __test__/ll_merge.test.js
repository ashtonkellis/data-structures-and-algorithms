'use strict';

// const util = require('util');
const LinkedList = require('./../08-ll-merge/ll_merge');

describe('Linked List #append', () => {
  let testLL;

  beforeEach(() => {
    testLL = new LinkedList();
  });

  afterEach(() => {
    testLL = null;
  });
  
  test('#append: happy path', () => {
    testLL.append(1);
    testLL.append(2);
    testLL.append(3);
    expect(testLL.head.value).toBe(1);
    expect(testLL.head.next.value).toBe(2);
    expect(testLL.head.next.next.value).toBe(3);
  });

  test('#append: returns instance of linked list', () => {
    expect(testLL.append(1)).toBeInstanceOf(LinkedList);
  });
});

describe('Linked List #shift', () => {
  let testLL;

  beforeEach(() => {
    testLL = new LinkedList();
    testLL.append(1);
    testLL.append(2);
    testLL.append(3);
  });

  afterEach(() => {
    testLL = null;
  });

  test('#shift: simple case', () => {
    expect(testLL.shift().value).toBe(1);
    expect(testLL.shift().value).toBe(2);
    expect(testLL.shift().value).toBe(3);
    // expect(testLL.shift()).toBeNull();
  });
});

describe('Linked List #merge', () => {
  let testLL1;
  let testLL2;
  
  beforeEach(() => {

  });

  afterEach(() => {
    testLL1 = null;
    testLL2 = null;
  });

  test('#merge: simple case', () => {
    testLL1 = new LinkedList();
    testLL1.append(1);
    testLL1.append(3);
    testLL1.append(5);

    testLL2 = new LinkedList();
    testLL2.append(2);
    testLL2.append(4);
    testLL2.append(6);
    
    const mergedLL = LinkedList.merge(testLL1, testLL2);
    // console.log(util.inspect(mergedLL, false, null), 'merged linked list');
    expect(mergedLL.head.value).toBe(1);
    expect(mergedLL.head.next.value).toBe(2);
    expect(mergedLL.head.next.next.value).toBe(3);
    expect(mergedLL.head.next.next.next.value).toBe(4);
    expect(mergedLL.head.next.next.next.next.value).toBe(5);
    expect(mergedLL.head.next.next.next.next.next.value).toBe(6);
    expect(mergedLL.head.next.next.next.next.next.next).toBeNull();
  });

  test('#merge: empty lists', () => {
    const mergedLL = LinkedList.merge(new LinkedList(), new LinkedList());
    expect(mergedLL.head).toBeNull();
  });
});
