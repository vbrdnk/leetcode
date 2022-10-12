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
const minDiffInBST = function(root) {
    if (!root) return 0;
    const values = [];

    function inorder(node) {
        if (!node) return [];

        if (node.left) inorder(node.left);
        values.push(node.val);
        if (node.right) inorder(node.right);
    }

    inorder(root);

    let ans = Infinity;

    for (let i = 1; i < values.length; i++) {
        ans = Math.min(ans, values[i] - values[i - 1]);
    }

    return ans;
};
