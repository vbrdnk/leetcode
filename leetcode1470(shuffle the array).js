/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function(nums, n) {
  const result = [];
  let i = 0;
  let j = n;

  while (i < n) {
    result.push(nums[i], nums[j]);
    i++;
    j++;
  }

  return result;
};

const shuffle2 = function(nums, n) {
  let i = n - 1
  for (let j = nums.length - 1; j >= n; j--) {
    nums[j] <<= 10
    nums[j] |= nums[i]
    i--
  }

  i = 0
  for (let j = n; j < nums.length; j++) {
    const num1 = nums[j] & 1023
    const num2 = nums[j] >> 10
    nums[i] = num1
    nums[i + 1] = num2
    i += 2
  }

  return nums
};

console.log(shuffle([2,5,1,3,4,7], 3)); // [2,3,5,4,1,7]
