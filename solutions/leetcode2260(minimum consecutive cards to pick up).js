/**
 * @param {number[]} cards
 * @return {number}
 */
const minimumCardPickup = function(cards) {
    if (!cards.length) return -1;

    let dict = new Map();
    let ans = Infinity;

    for (let i = 0; i < cards.length; i++) {
        if (dict.has(cards[i])) {
            ans = Math.min(ans, i - dict.get(cards[i]) + 1);
        }

        dict.set(cards[i], i);
    }

    return ans === Infinity ? - 1: ans;
};

console.log(minimumCardPickup([3,4,2,3,4,7])); // 4
