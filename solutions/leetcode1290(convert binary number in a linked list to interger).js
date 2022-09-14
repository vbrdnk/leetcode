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
const getDecimalValue = function(head) {
    let decimal = 0;

    while (head) {
        decimal *= 2;
        decimal += head.val;
        head = head.next;
    }


    return decimal;
};
