/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
const arrayStringsAreEqual = function(word1, word2) {
    let wordsPointer1 = 0;
    let wordsPointer2 = 0;

    let lettersPointer1 = 0;
    let lettersPointer2 = 0;


    while (wordsPointer1 < word1.length && wordsPointer2 < word2.length) {
        const currString1 = word1[wordsPointer1];
        const currString2 = word2[wordsPointer2];

        if (currString1.charAt(lettersPointer1) !== currString2.charAt(lettersPointer2)) return false;

        if (lettersPointer1 < currString1.length - 1) {
            lettersPointer1++;
        } else {
            lettersPointer1 = 0;
            wordsPointer1++;
        }

        if (lettersPointer2 < currString2.length - 1) {
            lettersPointer2++;
        } else {
            lettersPointer2 = 0;
            wordsPointer2++;
        }
    }

    return wordsPointer1 === word1.length && wordsPointer2 === word2.length;
};

console.log(arrayStringsAreEqual(['ab', 'c'], ['a', 'bc']));
