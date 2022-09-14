/**
 * @param {string} s
 * @return {number}
 */
const maxDepth = function(s) {
    if (!s.length) return 0;
    let currOpenParanCount = 0;
    let maxOpenParanCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '(') {
            currOpenParanCount++;
            maxOpenParanCount = Math.max(maxOpenParanCount, currOpenParanCount);
        }

        if (s.charAt(i) === ')') {
            currOpenParanCount--;
        }
    }

    return maxOpenParanCount;
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1")); // 3
