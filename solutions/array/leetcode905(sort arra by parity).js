/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = function(nums) {
    let evenPointer = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            [nums[evenPointer], nums[i]] = [nums[i], nums[evenPointer]];
            evenPointer++;
        }
    }

    return nums;
};

console.log(sortArrayByParity([3,1,2,4]));
