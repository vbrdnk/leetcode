/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function(nums) {
    const memo = new Array(nums.length).fill(-1);

    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                memo[i] = Math.max(memo[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...memo);
};
