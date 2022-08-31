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
const postorderTraversal = function(root) {
    if (!root) {
        return [];
    }

    const result = [];
    const firstStack = [root];
    const secondStack = [];

    while (firstStack.length) {
        const curr = firstStack.pop();
        secondStack.push(curr);

        if (curr.right) firstStack.push(curr.right);
        if (curr.left) firstStack.push(curr.left);
    }

    while (secondStack.length) {
        const curr = secondStack.pop();
        result.push(curr.val);
    }

    return result;
};

