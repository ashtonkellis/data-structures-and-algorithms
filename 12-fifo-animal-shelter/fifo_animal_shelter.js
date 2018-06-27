'use strict';

module.exports = class AnimalShelter {
  constructor() {
    this.queue = [];
    this.skipped = [];
    this.animalTypes = ['dog', 'cat'];
  }

  enqueue(species, name) {
    if (!this.animalTypes.includes(species)) throw new Error('Species must be a dog or cat');
    
    const newAnimal = { species, name };
    this.queue.unshift(newAnimal);
  }

  // dequeue(pref) {
  //   if (!this.queue.length) return null;

  //   if (!pref) return this.queue.pop();

  //   let currentAnimal = this.queue
  // }
};
