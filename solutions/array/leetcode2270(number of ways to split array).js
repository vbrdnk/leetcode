/**
 * @param {number[]} nums
 * @return {number}
 */
const waysToSplitArray = function(nums) {
    const prefix = [];

    prefix[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        prefix[i] = nums[i] + prefix[i - 1];
    }

    let ans = 0;

    for (let i = 0; i < prefix.length - 1; i++) {
        if (prefix[i] >= prefix[prefix.length - 1] - prefix[i]) {
            ans++
        }
    }

    return ans;
};

console.log(waysToSplitArray([10,4,-8,7])); // 2
