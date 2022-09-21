/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProductDifference = function(nums) {
    nums.sort((a, b) => a - b);
    return nums[nums.length - 1] * nums[nums.length - 2] - nums[0] * nums[1];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProductDifference2 = function(nums) {
    let min1 = Number.MAX_SAFE_INTEGER;
    let min2 = Number.MAX_SAFE_INTEGER;

    let max1 = Number.MIN_SAFE_INTEGER;
    let max2 = Number.MIN_SAFE_INTEGER;

    for (let num of nums) {
        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }

        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }
    }

    return max1 * max2 - min1 * min2;
};

console.log(maxProductDifference([5,6,2,7,4])); // 34
console.log(maxProductDifference2([5,6,2,7,4])); // 34

