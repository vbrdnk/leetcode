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
 const rightSideView = function(root) {
    if (!root) {
        return [];
    }

    const queue = [root];
    const result = [];

    while (queue.length) {
        let len = queue.length;
        // the last node in the queue is the rightmost node in the level
        result.push(queue[len - 1].val);

        while (len--) {
            const node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return result;
};