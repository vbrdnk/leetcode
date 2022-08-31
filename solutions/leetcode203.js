/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 const removeElements = function(head, val) {
    let dummy = new ListNode(-Infinity, head);
    let curr = head;
    let prev = dummy;

    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next;
        } else {
            prev.next = curr;
            prev = curr;
        }
        
        curr = curr.next;
        
    }
    
    return dummy.next;
};