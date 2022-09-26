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
const convertBST = function(root) {
    let runningSum = 0;

    function dfs(node) {
        if (!node) return;
        dfs(node.right);
        runningSum += node.val;
        node.val = runningSum;
        dfs(node.left);
        return;
    }

    dfs(root);

    return root;
};

// the same problem as leetcode1038(binary search tree to greater sum tree)
