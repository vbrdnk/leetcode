/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = function(head) {
    if (!head) return 0;
    let len = 0;
    let answer = 0;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        len ++;
    }

    let mid = reverse(slow);
    let start = head;

    while (len--) {
        answer = Math.max(answer, start.val + mid.val);
        mid = mid.next;
        start = start.next;
    }

    return answer;
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
