/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.round(left + ((right - left) / 2));
    const num = nums[mid];

    if (num === target) {
      return mid;
    }

    if (num > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1], 1));
