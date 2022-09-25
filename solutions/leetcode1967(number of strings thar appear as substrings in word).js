/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
const numOfStrings = function(patterns, word) {
    let count = 0;

    for (let pattern of patterns) {
        if (word.includes(pattern)) count++;
    }

    return count;
};

console.log(numOfStrings(["a","abc","bc","d"], 'abc')); // 3
