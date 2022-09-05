/**
 * @param {number[]} nums
 * @return {number[]}
 */
const selectionSort = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let minIdx = i;

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIdx]) minIdx = j;
        }

        [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
    }

    return nums;
}

console.log(selectionSort([2, 5, 1, 8, 9, 7, 4, 6]));

