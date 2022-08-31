/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

const getTargetCopy = function(original, cloned, target) {
  let result;
  function dfs(node, target) {
    if (node.val === target.val) {
      result = node;
    }

    if (node.left) dfs(node.left, target);
    if (node.right) dfs(node.right, target);
  }

  dfs(cloned, target);

  return result;
};
