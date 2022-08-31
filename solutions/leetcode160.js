/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 const getIntersectionNode = function(headA, headB) {
    if (headA === null ||  headB === null) return null;
    
    let firstPointer = headA;
    let secondPointer = headB;
    
    while (firstPointer !== secondPointer) {
        firstPointer = firstPointer === null ? headB : firstPointer.next;
        secondPointer = secondPointer === null ? headA : secondPointer.next;
    }
    
    
    return firstPointer;
    
};