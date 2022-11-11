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
const maxLevelSum = function(root) {
    let maxSumLevel = 1;
    let maxSum = root.val;

    let queue = [root];
    let currLevel = 1;

    while (queue.length) {
        let len = queue.length;
        let currLevelSum = 0;

        while (len--) {
            const node = queue.shift();
            currLevelSum += node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (currLevelSum > maxSum) {
            maxSum = currLevelSum;
            maxSumLevel = currLevel;
        }

        currLevel++;
    }

    return maxSumLevel;
};
