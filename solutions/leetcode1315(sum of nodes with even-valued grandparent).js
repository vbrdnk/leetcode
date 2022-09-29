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
const sumEvenGrandparent = function(root) {

    function dfs(node, parent = null, grandParent = null) {
        let sum = 0;

        if (!node) return 0;

        if (grandParent && grandParent.val % 2 === 0) {
            sum += node.val;
        }

        sum += dfs(node.left, node, parent);
        sum += dfs(node.right, node, parent);

        return sum;
    }

    return dfs(root);
};
