/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
   // state machine + dp
    let sold = -Infinity;
    let held = -Infinity;
    let reset = 0;

    for (const price of prices) {
        let preSold = sold;

        sold = held + price;
        held = Math.max(held, reset - price);
        reset = Math.max(reset, preSold);
    }

    return Math.max(sold, reset);
};

console.log(maxProfit([1,2,3,0,2])); // 3
