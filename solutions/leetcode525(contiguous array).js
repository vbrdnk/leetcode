/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = function(nums) {
    const counts = new Map();
    counts.set(0, -1);

    let maxLength = 0;
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i] === 0 ? -1 : 1;

        if (counts.has(total)) {
            // if map has the same total previously, it means we had equal amount of 0 and 1 between these totals
            maxLength = Math.max(maxLength, i - counts.get(total));
        } else {
            counts.set(total, i);
        }
    }

    return maxLength;
};
