/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countPairs = function(nums, k) {
    let validPairsCount = 0;
    if (!nums.length) return validPairsCount;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && i * j % k === 0) {
                validPairsCount++;
            }
        }
    }

    return validPairsCount;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countPairs2 = function(nums, k) {
    let validPairsCount = 0;
    if (!nums.length) return validPairsCount;
    const hashMap = {};

    for (let i = 0; i < nums.length; i++) {
      if (!hashMap[nums[i]]) {
          hashMap[nums[i]] = [i];
      } else {
          hashMap[nums[i]].push(i);
      }
    }

    for (let indices of Object.values(hashMap)) {
        if (indices.length < 2) {
            continue;
        }

        for (let i = 0; i < indices.length; i++) {
            for (let j = i + 1; j < indices.length; j++) {
                if (indices[i] * indices[j] % k === 0) {
                    validPairsCount++;
                }
            }
        }

    }

    return validPairsCount;
};

console.log(countPairs2([3,1,2,2,2,1,3], 2)); // 4
console.log(countPairs2([1,2,3,4], 2)); // 0

