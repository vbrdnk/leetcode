/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    if (!nums.length) return  0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }

    return nums.length;
}

const removeDuplicates2 = function(nums) {
    // Length of the updated array
    let count = 0;
    // Loop for all the elements in the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is equal to the next element, we skip
        if (i < nums.length - 1 && nums[i] === nums[i + 1]) {
            continue;
        }
        // We will update the array in place
        nums[count] = nums[i];
        count++;
    }
    return count;
};

const removeDuplicates2 = function(nums) {
    // two pointers approach
    if (!nums.length) return 0;

    // write pointer is 1 because first element is in place
    let writePointer = 1;

    for (let readPointer = 1; readPointer < nums.length; readPointer++) {
        if (nums[readPointer] !== nums[readPointer - 1]) {
            nums[writePointer] = nums[readPointer];
            writePointer++;
        }
    }

    return writePointer;


};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
