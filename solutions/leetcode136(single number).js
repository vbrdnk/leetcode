/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  const map = {};

  for (let num of nums) {
    map[num] = !map[num] ? 1 : map[num] + 1;
  }

  let singleNum;

  for (let [key, value] of Object.entries(map)) {
    if (value === 1) {
      singleNum = key;
    }
  }

  return singleNum;
};

const singleNumber2 = function(nums) {
  nums.sort();

  for (let i = 1; i < nums.length; i += 2) {
    if (nums[i] !== nums[i - 1]) {
      return nums[i - 1];
    }
  }

  return nums[nums.length - 1];
};

const singleNumber3 = function(nums) {
  let result = 0;

  for (let num of nums) {
    result ^= num;
  }

  return result;
}
