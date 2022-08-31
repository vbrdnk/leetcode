/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = function(nums, target) {
    const hashMap = {};

    for (let [idx, value] of nums.entries()) {
        hashMap[value] = idx;
    }

    for (let i = 0; i < nums.length; i++) {
        const potentialKey = target - nums[i];

        if (hashMap[potentialKey] && hashMap[potentialKey] != i) {
            return [i, hashMap[potentialKey]]
        }
    }
};
