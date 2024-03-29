/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = function(nums) {
    nums.sort((a, b) => a - b);
    const len = nums.length;
    return Math.max(nums[0] * nums[1] * nums[len - 1], nums[len - 1] * nums[len - 2] * nums[len - 3]);
};

console.log(maximumProduct([1,2,3])); // 6
console.log(maximumProduct([1,2,3,4])); // 24
console.log(maximumProduct([-1,-2,-3])); // -6
