/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function(pushed, popped) {
    if (pushed.length !== popped.length) return false;

    const stack = [];

    let i = 0;

    for (let num of pushed) {
        stack.push(num);

        while (stack.length && stack[stack.length - 1] === popped[i]) {
            stack.pop();
            i++
        }
    }

    return i === pushed.length;
};

console.log(validateStackSequences([1,2,3,4,5], [4,5,3,2,1])); // true
console.log(validateStackSequences([1,2,3,4,5], [4,3,5,1,2])); // false
