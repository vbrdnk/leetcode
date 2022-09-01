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
 * @param {number} val
 * @return {TreeNode}
 */
// recursive approach
const insertIntoBST = function(root, val) {
    if (!root) return new TreeNode(val);

    function insert(node, val) {
        if (node.val < val) {
            if (node.right) {
                insert(node.right, val);
            } else {
                node.right = new TreeNode(val);
            }
        } else {
            if (node.left) {
                insert(node.left, val);
            } else {
                node.left = new TreeNode(val);

            }
        }
    }

    insert(root, val);

    return root;
};

// iterative approach
const insertIntoBST = function(root, val) {
    const newNode = new TreeNode(val);

    if (!root) return newNode;

    let curr = root;
    let prev = null;

    while (curr) {
        prev = curr;
        if (val > curr.val) {
            curr = curr.right;
        } else {
            curr = curr.left;
        }
    }

    if (val < prev.val) {
        prev.left = newNode;
    } else {
        prev.right = newNode;
    }

    return root;
};
