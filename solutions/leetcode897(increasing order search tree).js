/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const increasingBST = function(root, tail = null) {
    if (!root) return tail;
    const response = increasingBST(root.left, root);
    root.left = null
    root.right = increasingBST(root.right, tail);

    return response;
};
