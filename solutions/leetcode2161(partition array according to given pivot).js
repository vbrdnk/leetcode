/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
const pivotArray = function(nums, pivot) {
    let lower = 0;
    let higher = 0;
    let same = 0;
    let result = new Array(nums.length);

    for (let num of nums) {
        if (num < pivot) {
            lower++;
        } else if (num > pivot) {
            higher++
        } else {
            same++;
        }
    }

    // start to insert higher than pivot elements after lower + all pivot
    higher = lower + same;

    // start to insert pivot elements after all lower element
    same = lower;

    // start inserting from the start of array
    lower = 0;

    for (let num of nums) {
        if (num < pivot) {
            result[lower++] = num;
        } else if (num === pivot) {
            result[same++] =num
        } else {
            result[higher++] = num;
        }
    }


    return result;
};


console.log(pivotArray([9,12,5,10,14,3,10], 10)); // [9,5,3,10,10,12,14]
