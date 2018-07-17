# First repeated word
Find the first repeated word in a book.

Write a function that accepts a lengthy string parameter.

## photo
i don't have a photo because i did the whiteboard interview in person with noah today :)

## Solution
function firstRepeatedWord(str) {
  if (!str) return undefined;
  
  const allWords = str.replace(/,/g, '').toLowerCase().split(' ');
  const seenWords = new Set();

  for (let word of allWords) { // eslint-disable-line
    if (seenWords.has(word)) return word;
    seenWords.add(word);
  }

  return null;
}

module.exports = firstRepeatedWord;
