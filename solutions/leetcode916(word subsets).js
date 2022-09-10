/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
const wordSubsets = function (words1, words2) {
    const result = [];
    const map = {};

    for (let word of words2) {
        const countB = count(word);

        for (let key of Object.keys(countB)) {
            map[key] = map[key] ? Math.max(countB[key], map[key]) : countB[key];
        }
    }

    let maxSubsetString = '';

    for (let key of Object.keys(map)) {
        while(map[key]--) {
            maxSubsetString += key;
        }
    }

    for (let word of words1) {
        if (isSubset(word, maxSubsetString)) result.push(word);
    }

    return result;
};

/**
 * @param {string} original
 * @param {string} target
 * @return {boolean}
 */
function isSubset(original, target) {
    const map = {};

    for (let i = 0; i < original.length; i++) {
        if (!map[original[i]]) {
            map[original[i]] = 1;
        } else {
            map[original[i]]++;
        }
    }

    for (let letter of target) {
        if (!map[letter]) return false;
        map[letter]--;
    }

    return Object.values(map).every(num => num >= 0);
}

/**
 * @param {string} str
 * @return {number[]}
 */
function count(str) {
    const lettersMap = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!lettersMap[char]) {
            lettersMap[char] = 1;
        } else {
            lettersMap[char]++;
        }
    }

    return lettersMap;
}


console.log(wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ['e', 'o']));
console.log(wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["e", "oo"]));
