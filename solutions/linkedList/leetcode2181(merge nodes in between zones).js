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
const mergeNodes = function(head) {
    if (!head) return head;

    let prev = head;
    let curr = head.next;
    let sum = 0;

    while (curr) {
        if (curr.val === 0) {
            prev.next.val = sum;
            prev.next.next = curr.next;
            prev = prev.next;
            sum = 0;
        }

        sum += curr.val;
        curr = curr.next;
    }

    return head.next;
};

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
const mergeNodesRecursive = function(head) {
    if (!head) return head;

    if (!head.next) return null;

    let curr = head.next;
    let sum = 0;

    while (curr.val !== 0) {
        sum += curr.val;
        curr = curr.next;
    }

    head.val = sum;
    head.next = mergeNodes(curr);

    return head;
};

