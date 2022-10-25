/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function(word1, word2) {
    let result = '';
    let i = 0;
    let j = 0;

    while (i < word1.length && j < word2.length) {
        result += word1[i] + word2[j];
        i++;
        j++;
    }

    while (i < word1.length) {
        result += word1[i];
        i++;
    }

    while (j < word2.length) {
        result += word2[j];
        j++;
    }

    return result;
};

console.log(mergeAlternately('abc', 'pqr')); // apbqcr
console.log(mergeAlternately('ab', 'pqrs')); // apqbrs
