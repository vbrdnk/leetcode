/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 const isSubsequence = function(s, t) {
    if (s.length > t.length) return false;

    let subsequence = 0;

    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[subsequence]) {
            subsequence++;
        }
    }

    return subsequence === s.length;
};


console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));
console.log(isSubsequence("acb", "ahbgdc"))
