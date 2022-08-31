const numsMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
}

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }

    const result = [];

    function dfs(i, input, slate) {
        // base case
        if (i === input.length) {
            result.push(slate.join(''));
            return;
        }

        // recursive case
        let chars = numsMap[input[i]];
        for (let char of chars) {
            slate.push(char);
            dfs(i + 1, input, slate);
            slate.pop();
        }
    }

    dfs(0, digits, []);

    return result;
};
