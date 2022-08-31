/**
 * @param {string} s
 * @return {number}
 */
 const longestPalindrome = function(s) {
    if (s.length === 1) {
        return 1;
    }
    
    const hashmap = {};
    
    let ans = 0;
  
    for (let char of s) {
        hashmap[char] = (hashmap[char] || 0) + 1;
        if (hashmap[char] % 2 == 0) ans += 2;
    }
    
    return s.length > ans ? ans + 1 : ans;
};