/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
const nextLargerNodes = function(head) {
    if (!head) return [];
    if (!head.next) return [0];

    const nums = [];
    while (head) {
        nums.push(head.val);
        head = head.next;
    }

    const stack = [];
    const ans = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
            ans[stack.pop()] = nums[i];
        }

        stack.push(i);
    }

    return ans;
};
