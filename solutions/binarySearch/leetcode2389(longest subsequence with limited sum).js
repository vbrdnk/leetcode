/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
const answerQueries = function(nums, queries) {
    nums.sort((a, b) => a - b);
    let ans = [];
    let sum = 0;
    const presum = nums.map((value) => sum += value);

    for (let i = 1; i < nums.length; i++) {
        presum[i] = nums[i] + presum[i - 1];
    }

    for (let i = 0; i < queries.length; i++) {
        ans[i] = binarySearch(presum, queries[i]);
    }

    return ans;
};

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const num = arr[mid];

        if (num === target) {
            return mid + 1;
        }

        if (num > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

console.log(answerQueries([4, 5, 2, 1], [3, 10, 21])); // [2, 3, 4]
