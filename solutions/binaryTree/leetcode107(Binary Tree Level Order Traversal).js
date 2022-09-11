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
 * @return {number[][]}
 */
const levelOrderBottom = function(root) {
    if (!root) {
        return [];
    }

    const result = [];
    const queue = [root];

    while (queue.length) {
        let len = queue.length;
        result.push(queue.map(node => node.val));

        while (len--) {
            const curr = queue.shift();

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
    }
    return result.reverse();
};
