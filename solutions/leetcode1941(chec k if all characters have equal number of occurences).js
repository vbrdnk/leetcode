/**
 * @param {string} s
 * @return {boolean}
 */
const areOccurrencesEqual = function(s) {
    let counts = new Map();
    for (const c of s) {
        counts.set(c, (counts.get(c) || 0) + 1);
    }

    let frequencies = new Set();
    for (const val of counts.values()) {
        frequencies.add(val);
    }

    return frequencies.size == 1;
};
