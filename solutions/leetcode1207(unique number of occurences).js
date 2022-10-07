/**
 * @param {string} s
 * @return {boolean}
 */
const uniqueOccurrences = function(arr) {
    let counts = new Map();
    for (const c of arr) {
        counts.set(c, (counts.get(c) || 0) + 1);
    }

    let frequencies = new Set();
    for (const val of counts.values()) {
        frequencies.add(val);
    }

    return frequencies.size == counts.size;
};


console.log(uniqueOccurrences([1,2,2,1,1,3])); // true
