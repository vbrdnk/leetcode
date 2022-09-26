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
const bstToGst = function(root) {
    let runningSum = 0;
    let curr = root;

    const stack = [];
    while (stack.length || curr) {
        while (curr) {
            stack.push(curr);
            curr = curr.right;
        }
        curr = stack.pop();
        runningSum += curr.val;
        curr.val = runningSum;
        curr = curr.left;
    }

    return root;
};


console.log(bstToGst([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]));
