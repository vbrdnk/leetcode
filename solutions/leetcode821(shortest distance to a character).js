/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
const shortestToChar = function(s, c) {
    const ans = [];
    const n = s.length;
    let pos = -n;

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === c) pos = i;
        ans[i] = i - pos;
    }

    for (let i = pos - 1; i >= 0; i--) {
        if (s.charAt(i) === c) pos = i;
        ans[i] = Math.min(ans[i], pos - i);
    }

    return ans;
};

console.log(shortestToChar('loveleetcode', 'e')); // [3,2,1,0,1,0,0,1,2,2,1,0]
