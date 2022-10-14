/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = function(arr, k, x) {
    let left = 0;
    let right = arr.length - 1;

    while (right - left >= k) {
        if (Math.abs(arr[left] - x) > Math.abs(arr[right] - x)) {
            left++;
        } else {
            right--;
        }
    }

    let ans = new Array(k);

    for (let i = 0; i < right; i++) {
        ans[i] = arr[i];
    }

    return ans;
};
