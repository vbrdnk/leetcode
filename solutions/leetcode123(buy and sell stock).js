/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    if (prices.length === 0) return 0

    let dp = new Array(prices.length).fill(0);
    let min = prices[0];
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
        dp[i] = max;
    }

    // 1st run dp = [0,0,2,2,2,3,3,4];

    min = prices[0];
    max = 0;
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i] - dp[i]);
        max = Math.max(max, prices[i] - min);
        dp[i] = max;
    }


    return dp.pop();
};
