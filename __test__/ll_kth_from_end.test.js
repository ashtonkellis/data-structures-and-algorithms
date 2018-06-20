'use strict';

const LinkedList = require('./../07-kth-from-end/ll_kth_from_end');

describe('Linked List kth-from-end testing', () => {
  let testLL;

  beforeEach((() => {
    testLL = new LinkedList();
    for (let i = 1; i <= 5; i++) {
      testLL.append(i);
    }
  }));

  afterEach(() => {
    testLL = null;
  });

  test('#append: happy path', () => {
    expect(testLL.head.value).toBe(1);
    expect(testLL.head.next.value).toBe(2);
    expect(testLL.head.next.next.value).toBe(3);
  });

  test('#kthFromEnd', () => {
    expect(testLL.kthFromEnd(0)).toBe(5);
    expect(testLL.kthFromEnd(2)).toBe(3);
    expect(testLL.kthFromEnd(4)).toBe(1);
  });

  test('#kthFromEnd: empty list', () => {
    testLL = new LinkedList();
    expect(testLL.kthFromEnd(0)).toBeNull();
  });

  test('kthFromEnd: short list', () => {
    testLL = new LinkedList();
    testLL.append(1);
    expect(testLL.kthFromEnd(0)).toBe(1);
  });

  test('kthFromEnd: returns null on over index', () => {
    expect(testLL.kthFromEnd(20)).toBeNull();
  });
});
