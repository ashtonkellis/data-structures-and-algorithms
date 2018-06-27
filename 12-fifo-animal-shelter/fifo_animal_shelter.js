'use strict';

module.exports = class AnimalShelter {
  constructor() {
    this.queue = [];
    this.skipped = [];
    this.animalTypes = ['dog', 'cat'];
    this.length = 0;
  }

  enqueue(species, name) {
    if (!this.animalTypes.includes(species)) throw new Error('Species must be a dog or cat');
    
    this.length += 1;
    this.queue.unshift({ species, name });

    return this.length;
  }

  dequeue(pref) {
    if (!this.queue.length) return null;

    this.length -= 1;  
    
    if (!pref) {
      return this.queue.pop();
    }

    let currentAnimal;
    while (this.queue.length) {
      currentAnimal = this.queue.pop();
      if (currentAnimal.species === pref) break;
      this.skipped.push(currentAnimal);
    }

    while (this.skipped.length) {
      this.queue.push(this.skipped.pop());
    }
    
    return currentAnimal;
  }
};
