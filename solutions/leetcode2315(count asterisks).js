/**
 * @param {string} s
 * @return {number}
 */
const countAsterisks = function(s) {
    let barsCount = 0;
    let asterisksCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '*' && barsCount % 2 === 0) {
            asterisksCount++;
        }

        if (s.charAt(i) === '|') {
            barsCount++;
        }
    }

    return asterisksCount;
};

console.log(countAsterisks("l|*e*et|c**o|*de|")); // 2
