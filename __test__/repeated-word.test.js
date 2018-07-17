const firstRepeatedWord = require('../31-repeated-word/repeated-word');

const example1 = 'Once upon a time, there was a brave princess who';
const example2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only';
const example3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York.';

describe('#firstWordRepeated testing', () => {
  test('simple case', () => {
    expect(firstRepeatedWord(example1)).toBe('a');
    expect(firstRepeatedWord(example2)).toBe('it');
    expect(firstRepeatedWord(example3)).toBe('summer');
  });

  test('returns null on no match', () => {
    expect(firstRepeatedWord('no matches in here')).toBeNull();
  });

  test('returns undefined on empty string', () => {
    expect(firstRepeatedWord('')).toBeUndefined();
  });
});
