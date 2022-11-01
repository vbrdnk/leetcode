/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
const smallestDivisor = function (nums, threshold) {
    let ans = -1;
    let left = 1;
    let right = Math.max(...nums);

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        const sum = findDivisionSum(nums, mid);

        if (sum <= threshold) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans;
};

/**
 * @param {number[]} nums
 * @param {number} divisor
 * @return {number}
 */
function findDivisionSum(nums, divisor) {
    return nums
        .map(num => Math.ceil(num / divisor))
        .reduce((prev, curr) => prev += curr, 0);
}

// console.log(smallestDivisor([1, 2, 5, 9], 6)); // 5
console.log(smallestDivisor([44, 22, 33, 11, 1], 5)); // 44
