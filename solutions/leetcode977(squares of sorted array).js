/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {
    return nums.map(num => num * num).sort((a, b) => a -b);
};

const sortedSquares2 = function(nums) {
    const result = [];
    let left = 0;
    let right = nums.length - 1;
    let insertIdx = nums.length - 1;

    while (left <= right) {
        const leftSquared = nums[left] ** 2;
        const rightSquared = nums[right] ** 2;

        if (leftSquared > rightSquared) {
            result[insertIdx] = leftSquared;
            left++
        } else {
            result[insertIdx] = rightSquared;
            right--;
        }

        insertIdx--;
    }

    return result;
};

console.log(sortedSquares2([-4, -1, 0, 3, 10]));
console.log(sortedSquares2([-4, -2, -1, 0, 3, 10]));

