/**
 * @param {string} s
 * @return {string}
 */
const makeGood = function(s) {
    const stack = [];

    for (let char of s) {
        if (stack.length && isBadChars(char, stack[stack.length - 1])) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
};

/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
function isBadChars(a, b) {
    return Math.abs(a.charCodeAt(0) - b.charCodeAt(0)) === 32;
}

console.log(makeGood('leEeetcode')); // 'leetcode'
console.log(makeGood('abBAcC')); // ''
console.log(makeGood('Pp')); // ''
