# Implement an Animal Shelter
![alt text](https://raw.githubusercontent.com/ashtonkellis/data-structures-and-algorithms/master/assets/12-fifo-animal-shelter.jpg)

## Challenge
Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.

Implement the following methods:
- enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
- dequeue(pref): returns either a dog or a cat. If pref, a string, is ‘cat’ return the longest-waiting cat. If pref is ‘dog’, return the longest-waiting dog. For anything else, return either a cat or a dog.
- If a cat or dog isn’t preferred, return whichever animal has been waiting in the shelter the longest.

## Solution
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



