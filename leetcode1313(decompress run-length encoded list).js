/**
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = function(nums) {
  let result = [];

  for (let i = 1; i < nums.length; i += 2) {
      result.push(...new Array(nums[i - 1]).fill(nums[i]));
  }

  return result;
};

console.log(decompressRLElist([1, 2, 3, 4])); // [2,4,4,4]
