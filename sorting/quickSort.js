/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const quickSort = function(nums, left = 0, right = nums.length - 1) {
    if (left < right) {
        const pivotIdx = pivot(nums, left, right);
        quickSort(nums, left, pivotIdx - 1);
        quickSort(nums, pivotIdx + 1, right);
    }

    return nums;
}

function pivot(arr, left, right) {
    let pivot = right;
    let j = left;
    let i = left - 1;

    while (j < pivot) {
        if (arr[j] < arr[pivot]) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        } else {
            j++;
        }
    }

    i++;
    [arr[i], arr[pivot]]= [arr[pivot], arr[i]];

    return i;
}


console.log(quickSort([2, 5, 1, 8, 9, 7, 4, 6]));

