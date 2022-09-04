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
const deleteDuplicates = function(head) {
    if (!head) return null;

    const dummy = new ListNode(-Infinity, head);
    let current = head;
    let next = current.next;
    let prev = dummy;

    while (current) {
        if (current && next && current.val === next.val) {
            while (next && current.val === next.val) {
                next = next.next;
            }

            prev.next = next;
            current = next;
            next = next ? next.next : null
        } else {
            prev = current;
            current = current.next;
            next = next ? next.next : null;
        }

    }

    return dummy.next;
};
