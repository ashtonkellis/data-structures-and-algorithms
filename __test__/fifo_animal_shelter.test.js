'use strict';

const AnimalShelter = require('../12-fifo-animal-shelter/fifo_animal_shelter');

let testAS;
beforeEach(() => {
  testAS = new AnimalShelter();
});

afterEach(() => {
  testAS = null;
});

describe('AnimalShelter #enqueue', () => {
  test('#enqueue: simple case', () => {
    testAS.enqueue('dog', 'dog 1');
    testAS.enqueue('cat', 'cat 1');
    expect(testAS.queue[0].species).toBe('cat');
    expect(testAS.queue[0].name).toBe('cat 1');
    expect(testAS.queue[1].species).toBe('dog');
    expect(testAS.queue[1].name).toBe('dog 1');
  });

  test('#enqueue: throws error when species is not dog or cat', () => {
    expect(() => {
      testAS.enqueue('dinosaur');
    }).toThrow();
  });

  test('#enqueue: returns length of current queue', () => {
    expect(testAS.enqueue('dog', 'dog 1')).toBe(1);
    expect(testAS.enqueue('dog', 'dog 2')).toBe(2);
    expect(testAS.enqueue('dog', 'dog 3')).toBe(3);
  });
});

describe('AnimalShelter #dequeue', () => {
  test('#dequeue: returns null on empty queue', () => {
    expect(testAS.dequeue()).toBeNull();
  });

  test('#dequeue: without preference, simple case', () => {
    testAS.enqueue('dog', 'dog 1');
    testAS.enqueue('dog', 'dog 2');

    const pet1 = testAS.dequeue();
    const pet2 = testAS.dequeue();
    expect(pet1.species).toBe('dog');
    expect(pet1.name).toBe('dog 1');
    expect(pet2.species).toBe('dog');
    expect(pet2.name).toBe('dog 2');
  });

  test('#dequeue: with preference', () => {
    testAS.enqueue('dog', 'dog 1');
    testAS.enqueue('cat', 'cat 1');
    testAS.enqueue('cat', 'cat 2');
    testAS.enqueue('dog', 'dog 2');

    expect(testAS.dequeue('cat').name).toBe('cat 1');
    expect(testAS.dequeue('dog').name).toBe('dog 1');
    expect(testAS.dequeue('dog').name).toBe('dog 2');
    expect(testAS.dequeue('cat').name).toBe('cat 2');
    expect(testAS.dequeue()).toBeNull();
  });
});
