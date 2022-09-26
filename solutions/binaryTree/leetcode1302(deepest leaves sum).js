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
 * @return {number}
 */
const deepestLeavesSum = function(root) {
   let sum = 0;

   if (!root) return 0;
   const queue = [root];

   while (queue.length) {
       let len = queue.length;
       sum = 0;

       while (len--) {
           const node = queue.shift();
           sum += node.val;

           if (node.left) queue.push(node.left);
           if (node.right) queue.push(node.right);
       }
   }

   return sum;
};
