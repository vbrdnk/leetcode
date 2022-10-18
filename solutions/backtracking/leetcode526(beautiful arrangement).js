/**
 * @param {number} n
 * @return {number}
 */
const countArrangement = function (n) {
    const visited = new Array(n + 1).fill(false);
    let count = 0;

    function backtrack(i, slate) {
        // base case
        if (i > n) {
            count++;
            return;
        }

        for (let j = 1; j <= n; j++) {
            if (!slate[j] && (j % i === 0 || i % j === 0)) {
                slate[j] = true;
                backtrack(i + 1, slate);
                slate[j] = false;
            }
        }
    }

    backtrack(1, visited);
    return count;
};

console.log(countArrangement(2)); // 2
console.log(countArrangement(1)); // 1
