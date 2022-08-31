/**
 * @param {string} s
 * @return {boolean}
 */
 const isPalindrome = function(s) {
    if (s.length == 1) {
        return true;
    }

    const lowerCasedString = s.replace(/\W|_/g, '').toLowerCase();
    const len = lowerCasedString.length;
    const mid = len / 2;


    for (let i = 0; i < mid; i++) {
        if (lowerCasedString[i] !== lowerCasedString[len - 1 - i]) {
            return false;
        }
    }
    
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome('ab_a'));

