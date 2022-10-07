/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);

        if (stack.length && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
};
