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
const averageOfSubtree = function(root) {
    let totalCount = 0;

    function dfs(node) {
        if (!node) return [0, 0];

        let leftTree = dfs(node.left);
        let rightTree = dfs(node.right);

        let currNodeSum = leftTree[0] + rightTree[0] + node.val;
        let currNodeValuesNum = leftTree[1] + rightTree[1] + 1;

        let average = Math.floor(currNodeSum / currNodeValuesNum);

        if (average === node.val) totalCount++;

        return [currNodeSum, currNodeValuesNum];
    }

    dfs(root);

    return totalCount;
};
