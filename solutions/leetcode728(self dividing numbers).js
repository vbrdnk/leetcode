/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = function(left, right) {
    const result = [];

    for (let i = left; i <= right; i++) {
        if (isSelfDividing(i)) {
            result.push(i);
        }
    }

    return result;
};

/**
 * @param {number} num
 * @return {boolean}
 */
function isSelfDividing(num) {
    let digits = num;
    let valid = true;

    while (digits > 1) {
        const lastDigit = digits % 10;

        if (!lastDigit || num % lastDigit !== 0) {
            valid = false;
            break;
        }

        digits = Math.floor(digits / 10);
    }

    return valid;
}

console.log(selfDividingNumbers(1, 22));
