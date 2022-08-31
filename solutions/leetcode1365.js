/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function(nums) {
  // brute force
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== nums[i] && nums[j] < nums[i]) {
        count++;
      }
    }
    result.push(count);
  }

  return result;
};

const smallerNumbersThanCurrent2 = function(nums) {
  // hashMap force
  const copy = [...nums].sort((a,b) => a -b );

  const hashMap = new Map();
  for (let i = 0; i < copy.length; i++) {
    if (!hashMap.has(copy[i])) {
      hashMap.set(copy[i], i);
    }
  }

  return nums.map((num) => hashMap.get(num));
};

console.log(smallerNumbersThanCurrent2([8,1,2,2,3]));
