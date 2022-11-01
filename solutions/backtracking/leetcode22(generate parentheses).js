/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
    const ans = [];

    function backtrack(i, slate, openCount, closeCount) {
        // backtracking case
        if (openCount > n) {
            return;
        }

        if (closeCount > openCount) {
            return;
        }

        // base case
        if (i === n * 2) {
            ans.push([...slate].join(''));
            return;
        }

        // open paren
        slate.push('(');
        backtrack(i + 1, slate, openCount + 1, closeCount);
        slate.pop();

        // close paren
        slate.push(')');
        backtrack(i + 1, slate, openCount, closeCount + 1);
        slate.pop();
    }

    backtrack(0, [], 0, 0);
    return ans;
};

console.log(generateParenthesis(3));
