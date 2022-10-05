/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function(nums, k) {
    let counts = new Map();
    counts.set(0, 1);

    let ans = 0, runningSum = 0;

    for (let num of nums) {
        runningSum += num;
        ans += counts.get(runningSum - k) || 0;
        counts.set(runningSum, (counts.get(runningSum) || 0) + 1);
    }

    return ans;
};

console.log(subarraySum([1,2,3], 3)); // 2
