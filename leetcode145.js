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
    if (!root) return [];
    
    // recursive solution
    return postOrder(root);

    // recursive solution
    // return !root ? [] : [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];
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