/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
    const result = [];

    function dfs(i, input, slate, openCount, closeCount) {
        // backtracking case
        if (openCount > n) {
            return;
        }

        if (closeCount > openCount) {
            return;
        }

        // base case
        if (i === n * 2) {
            result.push(slate.join(''));
            return;
        }

        // recursive case
        // add open paren
        slate.push('(');
        dfs(i + 1, input, slate, openCount + 1, closeCount);
        slate.pop();

        // add close paren
        slate.push(')');
        dfs(i + 1, input, slate, openCount, closeCount + 1);
        slate.pop();
    }

    dfs(0, n, [], 0, 0);
    return result;
};

function isValid(str) {
    const stack = [];
    let i = 0;
    let len = str.length;

    while (i < len) {
        let currParen = str[i];
        stack.push(currParen);

        let open = stack[stack.length - 2];
        let close = stack[stack.length - 1];

        if (open + close === '()') {
            stack.pop();
            stack.pop();
        }

        i++;
    }

    return stack.length === 0;
}


console.log(generateParenthesis(3));
