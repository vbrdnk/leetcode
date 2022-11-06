/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
    const hashMap = new Map();
    const sortedStrs = strs.map(str => str.split('').sort().join(''));
    const ans = [];

    for (let i = 0; i < sortedStrs.length; i++) {
        const sortedStr = sortedStrs[i];
        if (!hashMap.has(sortedStr)) {
            hashMap.set(sortedStr, [strs[i]]);
        } else {
            hashMap.get(sortedStr).push(strs[i]);
        }
    }

    for (let value of hashMap.values()) {
        ans.push(value);
    }

    return ans;
};
