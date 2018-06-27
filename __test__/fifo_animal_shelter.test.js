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
});
