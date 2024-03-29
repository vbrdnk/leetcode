/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 const addTwoNumbers = function(l1, l2) {
    let sum = 0;
    let dummyNode = new ListNode(0);
    let result = dummyNode;

    while (l1 && l2) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        dummyNode.next = new ListNode(sum % 10);
        dummyNode = dummyNode.next;
        
        sum = sum > 9 ? 1 : 0;

    }
    
    if (sum) {
        dummyNode.next = new ListNode(sum);
    }
    
    return result.next;
};