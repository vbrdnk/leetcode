/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function(s) {
    if (s.length === 0) {
        return 0;
    }

    let result = 0;
    let balance = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') {
            balance--;
        } else {
            balance++;
        }

        if (balance === 0) {
            result++;
        }
    }

    return result;
};

console.log(balancedStringSplit("RLRRLLRLRL"))
