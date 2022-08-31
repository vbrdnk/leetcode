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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const rangeSumBST = function(root, low, high) {
  let sum = 0;

  function dfs(node, low, high) {
    if (node.val >= low && node.val <= high) sum += node.val;
    if (node.left) dfs(node.left, low, high);
    if (node.right) dfs(node.right, low, high);
  }

  dfs(root, low, high);

  return sum;

};
