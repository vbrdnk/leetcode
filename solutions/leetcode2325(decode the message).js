/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
const decodeMessage = function(key, message) {
    const map = new Map();
    let result = '';

    let idx = 0;

    for (let i = 0; i < key.length; i++) {
        if (!map.has(key[i]) && key.charCodeAt(i) !== 32) {
            map.set(key[i], String.fromCharCode(97 + idx));
            idx++;
        }
    }

    for (let char of message) {
        result += map.has(char) ? map.get(char) : char;
    }

    return result;
};

// O(n + m) - time complexity

console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"));
