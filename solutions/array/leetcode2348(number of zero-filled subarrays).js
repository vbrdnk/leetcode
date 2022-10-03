/**
 * @param {number[]} nums
 * @return {number}
 */
const zeroFilledSubarray = function(nums) {
    if (!nums.length) {
        return 0;
    }

    let ans = 0;
    let numSubarray = 0;

    for (let num of nums) {
        if (num === 0) {
            numSubarray++;
        } else {
            numSubarray = 0;
        }

        ans += numSubarray;
    }

    return ans;
};

console.log(zeroFilledSubarray([1,3,0,0,2,0,0,4])); // 6
