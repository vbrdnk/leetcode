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
const getMinimumDifference = function(root) {
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
const getMinimumDifference2 = function(root) {
    let ans = Infinity;
    let prev = null;

    function dfs(node) {
        if (!node) return ans;

        dfs(node.left);
        if (prev !== null) {
            ans = Math.min(ans, node.val - prev);
        }

        prev = node.val;

        dfs(node.right);
    }

    dfs(root);
    return ans;
};
