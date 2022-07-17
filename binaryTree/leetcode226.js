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
 * @return {TreeNode}
 */
 const invertTree = function(root) {
    if (!root) {
        return root;   
    }
    
    invert(root);
    
    return root;
};

const invert = (node) => {
    if (!node) {
        return null   
    }
    
    invert(node.right);
    invert(node.left);
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
}
