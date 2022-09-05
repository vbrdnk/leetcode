/**
 * @param {number} n
 * @return {number}
 */
const fib = function(n) {
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
};


const fibMemo = function(n) {
    const memo = [];

    function fib(num, memorized) {
        if (num < 1) {
            return 0;
        }

        if (num === 1) {
            return 1;
        }

        if (memorized[num]) {
            return memorized[num];
        }

        memorized[num] = fib(num - 1, memorized) + fib(num - 2, memorized);

        return memorized[num];
    }

    return fib(n, memo);
}

// bottom-up solution
const fibMemoBottomUp = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    const memo = [0, 1];

    for (let i = 2; i < n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }

    return memo[n - 1] + memo[n - 2];
}

console.log(fibMemoBottomUp(13));
console.log(fib(13));
