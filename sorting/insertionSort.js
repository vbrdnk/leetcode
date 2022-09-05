/**
 * @param {number[]} nums
 * @return {number[]}
 */
const insertionSort = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let j = i;

        while (j > 0 && nums[j] < nums[j - 1]) {
            [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
            j--;
        }
    }

    return nums;
}

console.log(insertionSort([2, 5, 1, 8, 9, 7, 4, 6]));

