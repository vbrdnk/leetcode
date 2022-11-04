/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    const map = new Map();

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);

        if (map.get(char) === 1) {
            return i;
        }
    }

    return -1;
};
