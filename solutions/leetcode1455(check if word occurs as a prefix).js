/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
const isPrefixOfWord = function(sentence, searchWord) {
    const words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (word.startsWith(searchWord)) {
            return i + 1;
        }
    }

    return -1;
};

console.log(isPrefixOfWord("i love eating burger", "burg")); // 4
console.log(isPrefixOfWord("this problem is an easy problem", "pro")); // 2
console.log(isPrefixOfWord("i am tired", "you")); // -1
