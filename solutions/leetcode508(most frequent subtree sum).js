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
const findFrequentTreeSum = function(root) {
    if (!root) return [];
    const sumCount = new Map();
    let maxCount = -Infinity;

    let ans = [];

    function dfs(node) {
        if (!node) return 0;

        let left = dfs(node.left);
        let right = dfs(node.right);

        let sum = left + right + node.val;

        sumCount.set(sum, (sumCount.get(sum) || 0) + 1);
        maxCount = Math.max(maxCount, sumCount.get(sum));

        return sum;
    }

    dfs(root);

    for (let [key, value] of sumCount) {
        if (value === maxCount) {
            ans.push(key);
        }
    }

    return ans;
};
