/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
    if (n < 2) {
        return n;
    }
    const dp = new Array(n).fill(0);
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    console.log(dp);

    return dp[n];
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(45));
