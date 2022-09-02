/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 const merge = function(nums1, m, nums2, n) {
    let first = m - 1;
    let second = n - 1;
    let i = m + n  - 1;
    
    while (second >= 0) {
        const firstVal = nums1[first];
        const secondVal = nums2[second];
        
        if (firstVal > secondVal) {
            nums1[i] = firstVal;
            i--;
            first--;
        } else {
            nums1[i] = secondVal;
            i--;
            second--;
        }
    }
};