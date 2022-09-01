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
 * @param {number} targetSum
 * @return {number}
 */
const pathSum = function(root, targetSum) {
    if (!root) {
        return 0;
    }

    let count = 0;

    const dfs = (node, sum) => {
        if (!node.left && !node.right) {
            if (node.val === sum) {
                count++;
            }
        }

        if (node.left) {
            dfs(node.left, sum - node.val);
        }

        if (node.right) {
            dfs(node.right, sum - node.val);
        }
    }

    dfs(root, targetSum);

    return count;
};
