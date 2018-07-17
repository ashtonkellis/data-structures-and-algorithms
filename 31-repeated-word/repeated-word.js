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
