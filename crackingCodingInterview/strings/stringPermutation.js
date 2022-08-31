// Give a smaller string s and bigger string b find all permutations of the shorter string within the longer string.


/**
 * @param {string} s
 * @param {string} b
 * @return {string[]}
 */
const findAllPermutations = function(s, b) {
    const result = [];

    for (let i = 0; i < b.length; i++) {
        if (isPermutation(s, b.slice(i, i + s.length))) {
            result.push(b.slice(i, i + s.length));
        }
    }

    return result;
}

const isPermutation = function(a, b) {
    if (a.length !== b.length) return false;
    const map = {};

    for (let i = 0; i < a.length; i++) {
        if (!map[a[i]]) {
            map[a[i]] = 1;
        } else {
            map[a[i]]++;
        }
    }
    
    for (let i = 0; i < b.length; i++) {
        if (!map[b[i]]) return false;
        map[b[i]]--;
    }
    return true;
}

console.log(findAllPermutations('abbc', 'cbabadcbbabbcbabaabccbabc'));
