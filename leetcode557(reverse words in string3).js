/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
  const words = s.split(' ');
  const reversedWords = words.map(word => reverseString(word));
  return reversedWords.join(' ');
};

function reverseString(str) {
  const strLetters = str.split('');
  let left = 0;
  let right = strLetters.length - 1;

  while (left < right) {
    const temp = strLetters[left];
    strLetters[left] = strLetters[right];
    strLetters[right] = temp;
    left++;
    right--;
  }


  return strLetters.join('');
}
