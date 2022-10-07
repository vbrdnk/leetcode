/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false;
    const magazineCounts = new Map();

    for (let i = 0; i < magazine.length; i++) {
        const char = magazine.charAt(i);
        magazineCounts.set(char, (magazineCounts.get(char) || 0) + 1);
    }

    for (let i = 0; i < ransomNote.length; i++) {
        const char = ransomNote.charAt(i);
        if (!magazineCounts.get(char)) return false;
        magazineCounts.set(char, magazineCounts.get(char) - 1);
    }

    return true;
};

console.log(canConstruct('aa', 'aab')); // true
console.log(canConstruct('a', 'b')); // false

