/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function(head) {
    if (!head) return head;

    const dummy = new ListNode(-Infinity, head);
    let prev = dummy;
    let curr = head;

    while (curr && curr.next) {
        prev.next = curr.next;
        curr.next = curr.next.next;
        prev.next.next = curr;
        prev = curr;
        curr = curr.next;
    }

    return dummy.next;
};
