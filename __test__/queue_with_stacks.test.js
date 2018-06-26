'use strict';

const Queue = require('../11-queue-with-stackls/queue_with_stacks');

describe('Queue #enqueue', () => {
  let testQueue;

  beforeEach(() => {
    testQueue = new Queue();
  });

  afterEach(() => {
    testQueue = null;
  });
  
  test('#enque: simple case', () => {
    testQueue.enqueue(1);
    expect(testQueue.front).toBe(1);
    expect(testQueue.back).toBe(1);
    expect(testQueue).toHaveLength(1);

    testQueue.enqueue(2);
    expect(testQueue.front).toBe(1);
    expect(testQueue.back).toBe(2);
    expect(testQueue).toHaveLength(2);
  });

  test('#enqueue: returns new queue length', () => {
    expect(testQueue.enqueue(1)).toBe(1);
    expect(testQueue.enqueue(1)).toBe(2);
    expect(testQueue.enqueue(1)).toBe(3);
  });

  test('#enque: mutates original queue', () => {
    const myQueue = testQueue;
    testQueue.enqueue(1);
    expect(myQueue).toBe(testQueue);
  });
});

describe.only('Queue #dequeue', () => {
  let testQueue;

  beforeEach(() => {
    testQueue = new Queue();
  });

  afterEach(() => {
    testQueue = null;
  });

  test('#dequeue: simple case', () => {
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.dequeue()).toBe(1);
    expect(testQueue.front).toBe(2);
    expect(testQueue.dequeue()).toBe(2);
    expect(testQueue.front).toBe(3);
    expect(testQueue.dequeue()).toBe(3);
    expect(testQueue.front).toBeNull();
  });

  test('#dequeue: mutates original queue', () => {
    const myQueue = testQueue;
    testQueue.enqueue(1);
    expect(myQueue).toBe(testQueue);
  });
});
