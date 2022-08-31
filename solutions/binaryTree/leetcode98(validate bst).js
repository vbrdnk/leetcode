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
 * @return {boolean}
 */
function isValidBST(root) {
  return validate(root);
}

function validate(node, min = null, max = null) {
  if (!node) return true;

  if (min && node.val <= min.val) return false;
  if (max && node.val >= max.val) return false;
  return validate(node.left, min, node) && validate(node.right, node, max);
}
