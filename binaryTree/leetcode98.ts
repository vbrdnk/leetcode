/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
  return validate(root);
}

function validate(node: TreeNode, min = null, max = null) {
  if (!node) return true;

  if (min && node.val <= min.val) return false;
  if (max && node.val >= max.val) return false;
  return validate(node.left, min, node) && validate(node.right, node, max);
}
