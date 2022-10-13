/**
 * @param {number[]} nums
 * @return {number}
 */
const minStartValue = function(nums) {
    let sum = 0;
    let minVal = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        minVal = Math.min(minVal, sum);
    }

    return 1 - minVal;
};

console.log(minStartValue([-3,2,-3,4,2])); // 5
console.log(minStartValue([1, 2])); // 1
