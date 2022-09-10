/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let maxProfit = -Infinity;
    let currProfit = 0;
    let transactions = 2;

    for (let i = 0; i < prices.length; i++) {
        currProfit += prices[i];

        if (currProfit > maxProfit) {
            maxProfit = currProfit;
            transactions--;
        }


        if (transactions === 0) {
            break;
        }

        if (currProfit < 0) {
            currProfit = 0;
        }
    }

    return maxProfit;
};
