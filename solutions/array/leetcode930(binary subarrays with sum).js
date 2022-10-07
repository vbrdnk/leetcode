/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
const numSubarraysWithSum = function(nums, goal) {
    let ans = 0;

    let left = 0;
    let subarraySum = 0;

    for (let right = 0; right < nums.length; right++) {
        subarraySum += nums[right];

        while (subarraySum > goal) {
            subarraySum -= nums[left];
            left++;
        }

    }

    return ans;
};

console.log(numSubarraysWithSum([1,0,1,0,1], 2)); // 4
console.log(numSubarraysWithSum([0,0,0,0,0], 0)); // 15

