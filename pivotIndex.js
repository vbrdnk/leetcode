/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    const sum = nums.reduce((r, n) => r + n, 0);
     let left = 0;
     for (let i = 0; i < nums.length; i++) {
         const right = sum - left -nums[i];
         if (left === right) {
             return i;
         }
         left += nums[i];
     }
     return -1;
 };