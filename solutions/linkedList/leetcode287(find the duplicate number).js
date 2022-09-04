/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) {
    let fast = 0;
    let slow = 0;

    while (true) {
        fast = nums[nums[fast]];
        slow = nums[slow];

        if (fast === slow) {
            let pointer = 0;

            while (pointer !== slow) {
                pointer = nums[pointer];
                slow = nums[slow];
            }

            return pointer;

        }
    }
};


// with array modification
const findDuplicate2 = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let idx = nums.length - Math.abs(nums[i]);
        let val = nums[idx];

        if (val < 0) {
            return Math.abs(nums[i]);
        } else {
            nums[idx] = -nums[idx]
        }
    }

};
