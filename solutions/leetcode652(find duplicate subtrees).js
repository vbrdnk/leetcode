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
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = function(root) {
    if (!root) return [];
    const map = new Map();

    let ans = [];

    function preOrder(node) {
        if (!node) return '#';
        const serialized = `${node.val},${preOrder(node.left)},${preOrder(node.right)}`;
        map.set(serialized, (map.get(serialized) || 0) + 1);

        if (map.get(serialized) === 2) {
            ans.push(node);
        }

        return serialized;
    }

    preOrder(root);

    return ans;
};
