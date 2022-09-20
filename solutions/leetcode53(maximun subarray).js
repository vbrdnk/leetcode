/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    let result = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result.push(sum);
        if (sum < 0) {
            sum = 0;
        }
    }

    return Math.max(...result);
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
