/**
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = function(sentences) {
  const wordsInEachSentence = sentences.map(sentence => {
    const words = sentence.split(' ');
    return words.length;
  });

  return Math.max(...wordsInEachSentence);
};

const mostWordsFound2 = function(sentences) {
  const wordsInEachSentence = sentences.map(sentence => {
    let spacesInWord = 0;

    for (let i = 0; i < sentence.length; i++) {
      if (sentence.charCodeAt(i) === 32) {
        spacesInWord++;
      }
    }
    return spacesInWord + 1;
  });

  return Math.max(...wordsInEachSentence);
};
