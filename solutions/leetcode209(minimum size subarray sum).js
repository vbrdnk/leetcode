/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function(target, nums) {
    let left = 0;
    let ans = Infinity;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        while (sum >= target) {
            ans = Math.min(ans, i + 1 - left);
            sum -= nums[left];
            left++;
        }
    }

    return ans === Infinity ? 0 : ans;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
