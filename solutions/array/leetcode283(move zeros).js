/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    let nonZeroPointer = 0;

    for (let i = 0; i < nums.length; i++) {
       if (nums[i] !== 0) {
           [nums[nonZeroPointer],nums[i]] = [nums[i], nums[nonZeroPointer]];
           nonZeroPointer++;
       }
    }
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
