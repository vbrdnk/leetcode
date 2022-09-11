/**
 * @param {number[]} nums
 * @return {number}
 */
const mostFrequentEven = function(nums) {
    if (!nums.length) return -1;
    const map = {};
    nums.sort((a, b) => a - b);

    let biggestVal = 0;
    let mostFrequentEl = null;

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;

        if (nums[i] %  2 === 0 & biggestVal < map[nums[i]]) {
            biggestVal = map[nums[i]];
            mostFrequentEl = nums[i];
        }
    }

    if (mostFrequentEl === null) return -1;

    return mostFrequentEl;
};
