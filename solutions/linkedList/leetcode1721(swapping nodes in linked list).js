/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = function (head, k) {
    let fastPointer = head;
    let slowPointer = head;
    let left = head;
    let right = head;

    for (let i = 0; i < k - 1; i++) {
        fastPointer = fastPointer.next;
    }

    left = fastPointer;

    while (fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
    }

    right = slowPointer;

    let temp = left.val;
    left.val = right.val;
    right.val = temp;

    return head;
};
