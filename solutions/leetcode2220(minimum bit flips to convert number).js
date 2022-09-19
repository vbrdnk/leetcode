/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
const minBitFlips = function(start, goal) {
    let xor = start ^ goal;
    let count = 0;

    while (xor > 0) {
        count++;
        xor = xor & (xor - 1);
    }

    return count;
};
