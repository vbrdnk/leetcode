/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
    let result = null

    const dfs = (node) => {
        if (!node) return false;

        let left = dfs(node.left);
        let right = dfs(node.right);

        let curr = node === p || node === q;

        if (left + right + curr >= 2) result = node;

        return left || right || curr;
    }

    dfs(root);

    return result;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor2 = function (root, p, q) {
    if (!root) return null;

    // base case
    if (root === p || root === q) {
        return root;
    }

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);


    if (left && right) {
        return root;
    }

    if (left) {
        return left;
    }

    return right;
};
