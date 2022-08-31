/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {   
    if (t.length !== s.length) return false;
    const hashMap = {};


    for (let letter of s) {
        hashMap[letter] = (hashMap[letter] || 0) + 1;
    }
    for (let letter of t) {
        if (!hashMap[letter]) return false;
        hashMap[letter]--;
    }
    return true;
};