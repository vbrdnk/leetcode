/**
 * @param {string} s
 * @return {number[]}
 */
const diStringMatch = function(s) {
    const n = s.length;

    const permutations = new Array(n + 1);
    let lowest = 0;
    let highest = n;

    for (let i = 0; i < n; i++) {
        if (s.charAt(i) === 'I') {
            permutations[i] = lowest++;
        } else {
            permutations[i] = highest--;
        }
    }

    permutations[n] = lowest;

    return permutations;
};

console.log(diStringMatch("IDID")) // [0, 4, 1, 3, 2]
