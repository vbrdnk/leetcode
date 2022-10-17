/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = function(arr, k) {
    const res = new Array(arr.length + k).fill(0);

    for (let i = 0; i < arr.length; i++) {
        res[arr[i] - 1] = arr[i];
    }

    for (let i = 0; i < res.length; i++) {
        if (res[i] === 0) {
            k--;

            if (k === 0) {
                return i + 1;
            }
        }
    }
};

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = function(arr, k) {
    // binary search approach
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = (left + right) / 2;

        if (arr[mid] - mid - 1 < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left + k;
};

console.log(findKthPositive([2,3,4,7,11], 5)); // 9
console.log(findKthPositive([1,2,3,4], 2)); // 6
