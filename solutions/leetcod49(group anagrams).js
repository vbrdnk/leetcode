/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const groups = new Map();

    for (let str of strs) {
        const strLetters = str.split('').sort().join('');

        if (!groups.has(strLetters)) {
            groups.set(strLetters, []);
        }

        groups.get(strLetters).push(str);
    }
    
    let ans = [];

    for (const group of groups.values()) {
        ans.push(group);
    }

    return ans;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
