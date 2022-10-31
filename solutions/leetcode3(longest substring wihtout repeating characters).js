/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let max = 0;
    let left = 0;
    let map = new Map();

    for (let right = 0; right < s.length; right++) {
        let rightChar = s[right];
        map.set(rightChar, (map.get(rightChar) || 0) + 1);

        while (map.get(rightChar) > 1) {
            let leftChar = s[left];

            if (map.get(leftChar) > 1) {
                map.set(leftChar, map.get(leftChar) - 1);
            } else {
                map.delete(leftChar);
            }

            left++;
        }

        max = Math.max(max, (right - left) + 1);

    }

    return max;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1

