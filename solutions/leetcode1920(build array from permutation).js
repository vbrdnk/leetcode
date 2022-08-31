/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = function(nums) {
  return nums.map((num, idx) => {
    return nums[nums[idx]];
  });
};

console.log(buildArray([0,2,1,5,3,4]));
