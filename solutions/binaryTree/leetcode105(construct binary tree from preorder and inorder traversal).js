/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;

    let root = new TreeNode(preorder[0]);
    let midIdx = inorder.indexOf(root.val);

    root.left = buildTree(preorder.slice(1, midIdx + 1), inorder.slice(0, midIdx));
    root.right = buidTree(preorder.slice(midIdx + 1), inorder.slice(midIdx + 1));

    return root;
};
