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
 * @return {number[]}
 */
const preorderTraversalRecursive = function(root) {
    if (!root) {
        return [];
    }

    const result = [];

    function preorder(node) {
        result.push(node.val);

        if (node.left) preorder(node.left);
        if (node.right) preorder(node.right);
    }

    preorder(root);
    return result;
};
