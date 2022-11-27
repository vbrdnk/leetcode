/**
 * @param {number[]} nums
 * @return {number}
 */
const longestNiceSubarray = function(nums) {
    let left = 0, ans = 0, used = 0;

    for (let right = 0; right < nums.length; right++) {
        while ((used & nums[right]) !== 0) {
            used ^= nums[left++];
        }

        used |= nums[right]

        ans = Math.max(ans, right - left + 1);
    }

    return ans;
};

// console.log(longestNiceSubarray([1,3,8,48,10])); // 3
// console.log(longestNiceSubarray([3,1,5,11,13])); // 1
console.log(longestNiceSubarray([338970160,525086042,19212931,213753017,321613307,553272419,190837185,548628106,793546945,243936947])); // 1
