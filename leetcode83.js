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
    let dummy = new ListNode(-Infinity, head);
    let current = head;
    let prev = dummy;
    
    while (current) {
        if (prev.val === current.val) {
            while (current && current.val === prev.val) {
                current = current.next
            }

            prev.next = current;
        } else  {
            prev = current;
            current = current.next;
        }
    }

     
    return dummy.next;
};