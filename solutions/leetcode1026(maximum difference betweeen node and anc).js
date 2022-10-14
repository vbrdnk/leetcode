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
const maxAncestorDiff = function(root) {
    if (!root) return 0;

    let result = 0;

    function dfs(node, max, min) {
        if (!node) return null;

        const possibleResult = Math.max(Math.abs(max - node.val), Math.abs(min - node.val));
        result = Math.max(result, possibleResult);

        max = Math.max(max, node.val);
        min = Math.min(min, node.val);
        dfs(node.left, max, min);
        dfs(node.right, max, min);
        return;
    }


    dfs(root, root.val, root.val);
    return result;
};
