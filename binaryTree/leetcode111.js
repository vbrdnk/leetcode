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
 * @return {number}
 */
 const minDepth = function(root) {
    if (!root) {
        return 0;
    }
    
    const leftDepth = minDepth(root.left);
    const rightDepth = minDepth(root.right);
    
    return 1 + (leftDepth && rightDepth ? Math.min(leftDepth, rightDepth) : Math.max(leftDepth, rightDepth));
};