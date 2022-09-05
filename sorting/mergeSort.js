/**
 * @param {number[]} nums
 * @return {number[]}
 */
const mergeSort = function (nums) {
    // check for invalid input
    if (nums.length <= 1) return nums;
    let left = 0;
    let right = nums.length;

    // find middle idx
    const middleIdx = Math.floor((left + (right - left))/ 2);

    // split array and call merge sort on each subarray
    const leftArray = mergeSort(nums.slice(0, middleIdx));
    const rightArray = mergeSort(nums.slice(middleIdx));


    // merge result
    return merge(leftArray, rightArray);
}


/**
 * @param {number[]} left
 * @param {number[]} right
 * @return {number[]}
 */
function merge(left, right) {
    if (!left.length || !right.length) return [];
    let i = 0;
    let j = 0;

    const result = [];

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++
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

console.log(mergeSort([2, 5, 1, 8, 9, 7, 4, 6, 99, 10, 29, 11, 57, 43, 89, 75]));

