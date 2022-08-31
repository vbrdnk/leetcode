/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function(words) {
  const map = new Set();

  for (let word of words) {
    map.add(convertWordToMorseCode(word));
  }

  return map.size;
};

const morseLetters = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

function convertWordToMorseCode(word) {
  let result = "";

  for (let i = 0; i < word.length; i++) {
    result += morseLetters[word.charCodeAt(i) - 97];
  }

  return result;
}

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
