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

    const result = []

    const firstStack = [root];
    const secondStack = [];


    while (firstStack.length) {
        const curr = firstStack.pop();
        secondStack.push(curr);

        if (curr.left) firstStack.push(curr.left);
        if (curr.right) firstStack.push(curr.right);
    }

    while (secondStack.length) {
        const curr = secondStack.pop();
        result.push(curr.val);
    }

    return result;
};

// recursive solution
const postorderTraversalRecursive = function(root) {
    if (!root) {
        return [];
    }

    const result = [];

    function postorder(node) {
        if (node.left) postorder(node.left);
        if (node.right) postorder(node.right);
        result.push(node.val);
    }

    postorder(root);
    return result;
};
