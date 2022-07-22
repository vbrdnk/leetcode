/**
 * @param {string} s
 * @return {number}
 */
 const firstUniqChar = function(s) {
    const hashtable = new Map();
    
    for (let letter of s) {
        if (hashtable.has(letter)) {
            hashtable.set(letter, hashtable.get(letter) + 1)
        } else {
            hashtable.set(letter, 1);
        }
    }
    
    
    for (let i = 0; i < s.length; i++) {
        if (hashtable.get(s[i]) === 1) {
            return i;
        }
    }
    
    return -1;
    
};