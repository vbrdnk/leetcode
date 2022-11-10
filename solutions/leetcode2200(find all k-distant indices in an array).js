/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
const findKDistantIndices = function(nums, key, k) {
    const ans = [];
    const len = nums.length;
    let i = 0, j = 0;

    while (i < len) {
        if (nums[i] === key) {
            j = Math.max(i - k, j);

            while (j < len && j <= i + k) {
                ans.push(j);
                j++;
            }
        }

        i++;
    }

    return ans;
};

console.log(findKDistantIndices([3,4,9,1,3,9,5], 9, 1)); // [1, 2, 3, 4, 5, 6]
console.log(findKDistantIndices([2,2,2,2,2], 2, 2)); // [0, 1, 2, 3, 4]

