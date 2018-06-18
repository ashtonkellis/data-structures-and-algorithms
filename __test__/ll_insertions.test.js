'use strict';

const LinkedList = require('./../04-ll-insertions/ll_insertions');

describe('LinkedList methods testing', () => {
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

  test('#insertBefore: happy path', () => {
    testLL.append(1);
    testLL.append(2);
    testLL.append(3);
    testLL.insertBefore(3, 10);
    expect(testLL.head.value).toBe(1);
    expect(testLL.head.next.value).toBe(2);
    expect(testLL.head.next.next.value).toBe(10);
    expect(testLL.head.next.next.next.value).toBe(3);
  });

  test('#insertBefore: short linked list', () => {
    testLL.append(1);
    testLL.insertBefore(1, 0);
    expect(testLL.head.value).toBe(0);
    expect(testLL.head.next.value).toBe(1);
  });

  test('#insertBefore: returns instance of linked list', () => {
    testLL.append(1);
    expect(testLL.insertBefore(1, 0)).toBeInstanceOf(LinkedList);
  });

  test('#insertBefore: returns null if list is empty', () => {
    expect(testLL.insertBefore(1)).toBeNull();
  });

  test('#insertBefore: returns null if no node with value exists', () => {
    testLL.append(1);
    testLL.append(2);
    testLL.append(3);
    expect(testLL.insertBefore(10)).toBeNull();
  });

  test('#insertAfter: simple case', () => {
    testLL.append(1);
    testLL.append(2);
    testLL.append(3);
    testLL.insertAfter(2, 10);
    expect(testLL.head.value).toBe(1);
    expect(testLL.head.next.value).toBe(2);
    expect(testLL.head.next.next.value).toBe(10);
    expect(testLL.head.next.next.next.value).toBe(3);
  });

  test('insertAfter: insert after last node works', () => {
    testLL.append(1);
    testLL.append(2);
    testLL.append(3);
    testLL.insertAfter(3, 10);
    expect(testLL.head.value).toBe(1);
    expect(testLL.head.next.value).toBe(2);
    expect(testLL.head.next.next.value).toBe(3);
    expect(testLL.head.next.next.next.value).toBe(10);
  });

  test('#insertAfter: null on insert into empty list', () => {
    expect(testLL.insertAfter(1, 0)).toBeNull();
  });

  test('#insertAfter: returns instance of linked list', () => {
    testLL.append(1);
    expect(testLL.insertAfter(1)).toBeInstanceOf(LinkedList);
  });

  test('#insertAfter: returns null if value does not exist', () => {
    testLL.append(1);
    expect(testLL.insertAfter(10, 10)).toBeNull();
  });
});
