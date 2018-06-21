'use strict';

const LinkedList = require('./../04-ll-insertions/ll_insertions');

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

describe('Linked List #merge', () => {
  let testLL1;
  let testLL2;
  
  beforeEach(() => {
    testLL1 = new LinkedList();
    testLL1.append(1);
    testLL1.append(3);
    testLL1.append(5);

    testLL2 = new LinkedList();
    testLL2.append(2);
    testLL2.append(4);
    testLL2.append(6);
  });

  afterEach(() => {
    testLL1 = null;
    testLL2 = null;
  });

  test('#merge: simple case', () => {
    const mergedLL = LinkedList.merge(testLL1, testLL2);
    console.log(testLL1);
    console.log(testLL2);
    console.log(mergedLL);

    expect(mergedLL.head).toBe(1);
    expect(mergedLL.head.next).toBe(2);
    expect(mergedLL.head.next.next).toBe(3);
    expect(mergedLL.head.next.next.next).toBe(4);
    expect(mergedLL.head.next.next.next.next).toBe(5);
    expect(mergedLL.head.next.next.next.next.next).toBe(6);
    expect(mergedLL.head.next.next.next.next.next.next).toBeNull();
  });
});
