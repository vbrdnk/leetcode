/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findTargetSumWays = function(nums, target) {
    let result = 0;

    function dfs(i, nums, target, runningSum) {
        // base case

        if (i === nums.length) {
            if (runningSum === target) {
                result++;
            }
            return;
        }

        // recursive case

        // include positive
        runningSum += nums[i];
        dfs(i + 1, nums, target, runningSum);
        runningSum -= nums[i];

        // include negative
        runningSum -= nums[i];
        dfs(i + 1, nums, target, runningSum);
        runningSum += nums[i];
    }

    dfs(0, nums, target, 0);

    return result;
};
