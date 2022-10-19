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

    const ans = [];

    function backtrack(i, slate) {
        if (i === digits.length) {
            ans.push([...slate]);
            return;
        }

        for (let char of numsMap[i]) {
            slate.push(char);
            backtrack(i + 1, slate);
            slate.pop(char);
        }
    }

    return ans;
};
