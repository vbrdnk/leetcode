/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function(nums, k) {
    let ans = [];
    let deque = [];

    for (let i = 0; i < nums.length; i++) {
        while (deque.length && nums[i] > nums[deque[deque.length - 1]]) {
            deque.pop();
        }

        deque.push(i);

        if (deque[0] + k == i) {
            deque.shift();
        }

        if (i >= k - 1) {
            ans.push(nums[deque[0]]);
        }
    }

    return ans;
};
