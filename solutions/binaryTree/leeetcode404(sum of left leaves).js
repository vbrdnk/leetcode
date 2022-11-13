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
const sumOfLeftLeaves = function(root) {
    let ans = 0;

    function dfs(node, isLeft) {
        if (isLeft && !node.left && !node.right) {
            ans += node.val;
        }

        if (node.left) dfs(node.left, true);
        if (node.right) dfs(node.right, false);
    }

    dfs(root, false);
    return ans;
};
