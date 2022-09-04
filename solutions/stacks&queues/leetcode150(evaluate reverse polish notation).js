/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
    const stack = [];
    const operators = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '*': (num1, num2) => num1 * num2,
        '/': (num1, num2) => Math.trunc(num1 / num2)
    };

    for (let token of tokens) {
        if (operators[token]) {
            const num2 = stack.pop();
            const num1 = stack.pop();
            stack.push(operators[token](num1, num2));
        } else {
            stack.push(parseInt(token));
        }
    }

    return stack.pop();
};
