/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number  = function(num) {
    let max = num;
    let digits = [];

    while (num > 0) {
        const lastDigit = num % 10;
        digits.unshift(lastDigit);
        num = Math.floor(num / 10);
    }

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === 6) {
            digits[i] = 9;
            max = Math.max(max, Number(digits.join('')));
            digits[i] = 6;
        }
    }


    return max;
};

console.log(maximum69Number(9669));
