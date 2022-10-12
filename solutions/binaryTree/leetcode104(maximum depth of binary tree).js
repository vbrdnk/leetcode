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
function maxDepth(root) {
  if (!root) {
    return 0;
  }

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return Math.max(left, right) + 1;
}

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
function maxDepthIterative(root) {
  if (!root) {
    return 0;
  }

  const stack = [[root, 1]];
  let ans = 0;

  while (stack.length) {
    const [node, depth] = stack.pop();
    ans = Math.max(ans, depth);

    if (node.left) {
      stack.push([node.left, depth + 1]);
    }

    if (node.right) {
      stack.push([node.right, depth + 1]);
    }
  }

  return ans;
}
