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
const largestValues = function(root) {
    const ans = [];

    if (!root) return ans;

    const queue = [root];

    while (queue.length) {
        let currLevelLength = queue.length;
        let max = -Infinity;

        while (currLevelLength--) {
            const node = queue.shift();
            max = Math.max(max, node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        ans.push(max);
    }

    return ans;
};
