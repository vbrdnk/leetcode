/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function(nums) {
    return bubbleSort(nums);
};


function bubbleSort(nums) {
    let swapped = true;
    let count = 0;

    while (swapped) {
        swapped = false;

        for (let i = 0; i < nums.length - count; i++) {
            if (nums[i] > nums[i + 1]) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
                swapped = true;
            }
        }

        count++;
    }

    return nums;
}

function bubbleSort2(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }

    return nums;
}


function selectionSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        let minIdx = i;

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIdx]) {
                minIdx = j;
            }
        }

        [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
    }

    return nums;
}

function insertionSort(nums) {
    for (let i = 1; i < nums.length; i++) {
        let j = i;
        while (j > 0 && nums[j] < nums[j - 1]) {
            [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
            j--;
        }
    }

    return nums;
}

function mergeSort(nums) {
    if (nums.length <= 1) return nums;

    const mid = Math.floor(nums.length / 2);
    const left = mergeSort(nums.slice(0, mid));
    const right = mergeSort(nums.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

function quickSort(nums, left = 0, right = nums.length - 1) {
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


function quickSort2(nums, left = 0, right = nums.length - 1) {
    if (left >= right) return nums;

    const pivotIdx = Math.floor(Math.random() * (right - left) + left);
    const pivotElement = nums[pivotIdx];

    [nums[right], nums[pivotIdx]] = [nums[pivotIdx], nums[right]];

    let lessThanPointer = left;

    for (let i = left; i < right; i++) {
        if (nums[i] < pivotElement) {
            [nums[i], nums[lessThanPointer]] = [nums[lessThanPointer], nums[i]];
            lessThanPointer++;
        }
    }

    [nums[right], nums[lessThanPointer]] = [nums[lessThanPointer], nums[right]];
    quickSort2(nums, left, lessThanPointer - 1);
    quickSort2(nums, lessThanPointer + 1, right);

    return nums
}
