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
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
    const ans = [];

    function backtrack(node, slate) {
        slate.push(node.val);

        if (!node.left && !node.right) {
            ans.push(slate.join('->'));
            return;
        }

        if (node.left) {
            backtrack(node.left, slate);
            slate.pop();
        }

        if (node.right) {
            backtrack(node.right, slate);
            slate.pop();
        }
    }

    backtrack(root, []);

    return ans;
};

