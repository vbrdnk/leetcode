/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function(s, t) {
    return processString(s) === processString(t);
};

function processString(str) {
    const stack = [];

    for (let letter of str) {
        letter === '#' ? stack.pop() : stack.push(letter);
    }

    return stack.join('');
}
