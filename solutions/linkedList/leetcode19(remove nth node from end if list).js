/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(-Infinity, head);
    let prev = dummy;
    let tail = head;
    let removeNode = head;

    while (n--) {
        tail = tail.next;
    }

    while (tail) {
        tail = tail.next;
        prev = removeNode;
        removeNode = removeNode.next;
    }

    prev.next = removeNode.next;

    return dummy.next
};
