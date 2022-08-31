/**
 * @param {string} s
 * @return {string[]}
 */
const letterCasePermutation = function(s) {
    const result = [];

    function dfs(i, input, slate) {
        // base case
        if (i === s.length) {
            result.push(slate.join(''));
            return;
        }

        // recursive case
        const char = input[i];

        if (Number.isInteger(parseInt(char))) {
            slate.push(char);
            dfs(i + 1, input, slate);
            slate.pop();
        } else {
            // lower case
            slate.push(char.toLowerCase());
            dfs(i + 1, input, slate);
            slate.pop();

            // upper case
            slate.push(char.toUpperCase());
            dfs(i + 1, input, slate);
            slate.pop();
        }
    }

    dfs(0, s, []);

    return result;
};
