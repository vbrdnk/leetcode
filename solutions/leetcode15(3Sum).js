/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
    nums.sort((a,b ) => a -b);
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        // check for duplicates
        if (nums[i] === nums[i - 1]) {
            continue;
        }

        const target = nums[i] * -1;
        const subResult = twoSum(i + 1, target, nums);
        result.push(...subResult);
    }

    return result;
};

function twoSum(left, target, nums) {
    let right = nums.length - 1;
    let result = [];

    while (left < right) {
        let leftVal = nums[left];
        let rightVal = nums[right];

        if (leftVal + rightVal > target) {
            right--;
        } else if (leftVal + rightVal < target) {
            left++;
        } else {
            result.push([(target * - 1), leftVal, rightVal]);
            while (left < right && nums[left] === nums[left + 1]) left++;
            while (left < right && nums[right] === nums[right - 1]) right--;
            left++;
            right--;
        }
    }

    return result;
}

console.log(threeSum([-1,0,1,2,-1,-4]));