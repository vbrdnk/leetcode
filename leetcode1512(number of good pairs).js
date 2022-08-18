/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function(nums) {
  const hashMap = {};
  let numOfPairs = 0;

  for (let num of nums) {
    if (hashMap[num]) {
      hashMap[num]++;
    } else {
      hashMap[num] = 1;
    }
  }

  for (let key in hashMap) {
    if (hashMap[key] > 1) {
      numOfPairs += hashMap[key] * (hashMap[key] - 1) / 2;
    }
  }

  return numOfPairs;
};


console.log(numIdenticalPairs([1,2,3,1,1,3])); // 4
