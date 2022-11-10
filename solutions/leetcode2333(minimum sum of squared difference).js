/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
const minSumSquareDiff = function (nums1, nums2, k1, k2) {
    const len = nums1.length;
    const diff = new Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        diff[i] = Math.abs(nums1[i] - nums2[i]);
    }
    diff.sort((a, b) => b - a);
    const bucket = new Array(diff[0] + 1).fill(0);
    let tk = k1 + k2;
    for (let i of diff) {
        bucket[i]++;
    }
    for (let i = bucket.length - 1; tk > 0 && i >= 0; i--) {
        if (bucket[i] == 0) continue;
        const reduce = Math.min(bucket[i], tk);
        bucket[i] -= reduce;
        bucket[i - 1] += reduce;
        tk -= reduce;
    }
    let ans = 0;
    for (let i = bucket.length - 1; i >= 1; i--) {
        ans += bucket[i] * i * i;
    }
    return ans;
};

console.log(minSumSquareDiff([1, 2, 3, 4], [2, 10, 20, 19], 0, 0)); // 579
console.log(minSumSquareDiff([1, 4, 10, 12], [5, 8, 6, 9], 1, 2)); // 43

