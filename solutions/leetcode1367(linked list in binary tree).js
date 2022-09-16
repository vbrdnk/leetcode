/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSubPath = function(head, root) {
    if (!head) return true;
    if (!root) return false;

    return dfs(root, head) || isSubPath(head, root.left) || isSubPath(head, root.right);
};

function dfs(root, head) {
    if (!head) return true;
    if (!root) return false;

    return root.val === head.val && (dfs(root.left, head.next) || dfs(root.right, head.next));
}
