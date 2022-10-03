/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = function(nums, k) {
    let left = 0;
    let right = 0;

    for (right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            k--;
        }

        if (k < 0) {
            k += 1 - nums[left];
            left++;
        }
    }

    return right - left;
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)); // 6
