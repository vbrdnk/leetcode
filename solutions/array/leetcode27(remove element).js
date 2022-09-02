/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }

    return nums.length;
}

function removeElement2(nums, val) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        console.log(nums[left]);
        if (nums[left] === val) {
            nums[left] = nums[right];
            right--;
        } else {
            left++;
        }
    }

    return left;
}

console.log(removeElement2([3, 2, 2, 3], 3));
