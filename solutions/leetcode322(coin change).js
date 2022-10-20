/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins, amount) {
    if (amount < 1) return 0;
    let ans = [];

    function backtrack(target, slate) {
        if (target < 0) return -1;

        if (target === 0) return 0;
        if (slate[target - 1] !== 0) return slate[target - 1];
        let min = Infinity;

        for (let coin of coins) {
            const res = backtrack(target - coin, slate);
            min = Math.min(min, res + 1);
        }

        slate[target - 1] = (min === Infinity) ? -1 : min;
        return slate(target - 1);
    }

    return backtrack(amount, []);
};

console.log(coinChange([1, 2, 5], 11)); // 3
