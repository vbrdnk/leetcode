/**
 * @param {number[]} nums
 * @return {number[]}
 */
const bubbleSort = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }

    return nums;

}

console.log(bubbleSort([2, 5, 1, 8, 9, 7, 4, 6]));
