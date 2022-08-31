/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 const isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    let startPointer = head;
    let len = 0;
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        len++;
    }
    
    let mid = reverse(slow);
    
    while (len--) {
        if (mid.val !== startPointer.val) return false;
        
        mid = mid.next;
        startPointer = startPointer.next;
    }
    
    return true;
};

function reverse(head) {
    let curr = head;
    let prev = null;
    let next;
    
    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    return prev;
}