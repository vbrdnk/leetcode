/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function(head) {
    if (!head || !head.next) return;
    let slow = head;
    let fast = head;
    let prev = head;
    const l1 = head;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = null;

    const l2 = reverseList(slow);

    merge(l1, l2);
};

function merge(head1, head2) {
    if (!head1) return head2;
    if (!head2) return head1;

    head1.next = merge(head2, head1.next);
    return head1;
}

function reverseList(head) {
    let curr = head;
    let prev = head;
    let next;

    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}
