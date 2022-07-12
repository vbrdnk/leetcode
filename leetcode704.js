/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const search = function(nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
};

const binarySearch = function(nums, target, low, high) {
    if (low > high) {
        return -1;
    }

    const mid = Math.round(low + ((high - low) / 2));

    if (nums[mid] === target) {
        return mid;
    }

    if (nums[mid] > target) {
        return binarySearch(nums, target, low, mid - 1);
    } else {
        return binarySearch(nums, target, mid + 1, high);
    }
}

console.log(search([-1,0,3,5,9,12], 9));