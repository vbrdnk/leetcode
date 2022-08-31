/**
 * @param {number[]} prices
 * @return {number}
 */
 const maxProfit = function(prices) {
    let sellIdx = prices.length - 1;
    let profit = 0;

    for (let buyIdx = prices.length - 1; buyIdx >= 0; buyIdx--) {
        let buyVal = prices[buyIdx];
        let sellVal = prices[sellIdx];
        const price = sellVal - buyVal;


        if (price > 0) {
            profit = Math.max(profit, price);
        } else {
            sellIdx = buyIdx;
        }
    }

    return profit;
};

//two pointers approach