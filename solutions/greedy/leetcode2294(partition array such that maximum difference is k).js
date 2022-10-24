/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const partitionArray = function(nums, k) {
    nums.sort((a, b) => a - b);

    let x = nums[0];
    let ans = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - x > k) {
            x = nums[i];
            ans++;
        }
    }

    return ans;
};
