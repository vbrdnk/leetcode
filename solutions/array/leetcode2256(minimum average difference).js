/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumAverageDifference = function(nums) {
    let ans = Number.MAX_SAFE_INTEGER;
    let leftHalf = 0;
    let ansIdx = -1;
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        leftHalf += nums[i];
        let leftHalfSize = i + 1;
        let rightHalfSize = nums.length - 1 - i;
        let averageLeftPart = Math.floor(leftHalf / leftHalfSize);
        let averageRightPart = rightHalfSize > 0 ? Math.floor((total - leftHalf) / rightHalfSize): 0;

        const diff = Math.abs(averageLeftPart - averageRightPart);

        if (diff < ans) {
            ans = diff;
            ansIdx = i;
        }
    }

    return ansIdx;
};

console.log(minimumAverageDifference([2,5,3,9,5,3])); // 3
console.log(minimumAverageDifference([0])); // 0
console.log(minimumAverageDifference([0, 0, 0, 0])); // 0
console.log(minimumAverageDifference([4, 2, 0])); // 2



