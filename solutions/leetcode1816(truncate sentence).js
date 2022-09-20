/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const truncateSentence = function(s, k) {
    let spaceCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) === 32) {
            spaceCount++;

            if (spaceCount === k) {
                return s.slice(0, i);
            }
        }
    }

    return s;
};

console.log(truncateSentence("Hello how are you Contestant", 4));
