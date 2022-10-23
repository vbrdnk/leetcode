/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let midValue = nums[mid];

        if (midValue === target) {
            left = mid;
            right = mid;

            while (nums[left - 1] === target && left >= 0) {
                left--
            }


            while (nums[right + 1] === target && right < nums.length) {
                right++;
            }

            return [left, right];
        }

        if (midValue > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return [-1, -1];
};

// console.log(searchRange([5,7,7,8,8,10], 8)); // [3, 4]
console.log(searchRange([1], 1)); // [0, 0]

