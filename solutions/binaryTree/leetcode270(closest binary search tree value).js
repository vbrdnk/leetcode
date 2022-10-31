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
 * @param {number} target
 * @return {number}
 */
const closestValue = function(root, target) {
    let minDiff = root.val;

    while (root) {
        if (Math.abs(root.val - target) < Math.abs(minDiff - target)) {
            minDiff = root.val;
        }

        root = root.val > target ? root.left : root.right;
    }

    return minDiff;
};

