/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(k, prices) {
    function dp(i, holding, remain) {
        // base case
        if (i === prices.length || remain === 0) {
            return 0;
        }

        if (memo[i][holding][remain] !== - 1) {
            return memo[i][holding][remain];
        }

        let ans = dp(i + 1, holding, remain);

        if (holding) {
            ans = Math.max(ans, prices[i] + dp(i + 1, 0, remain - 1));
        } else {
            ans = Math.max(ans, -prices[i] + dp(i + 1, 1, remain));
        }

        memo[i][holding][remain] = true;
        return ans;
    }

    let memo = [];
    for (let i = 0; i < prices.length; i++) {
        memo.push([]);

        for (let j = 0; j < 2; j++) {
            memo[i].push(new Array(k + 1).fill(-1));
        }
    }

    return dp(0, 0, k);
};
