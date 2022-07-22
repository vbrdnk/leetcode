/**
 * @param {number} n
 * @return {boolean}
 */
 const isPowerOfFour = function(n) {
    if (n === 0) return false;
    while (n % 4 === 0) n /= 4;
    return n === 1;
};