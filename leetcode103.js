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
 * @return {number[][]}
 */
 const zigzagLevelOrder = function(root) {
    if (!root) {
        return [];
    }
    
    const queue = [root];
    const result = [];
    let count = 0;
    
    while (queue.length) {
        let len = queue.length;
        const nodes = count % 2 === 0 ? queue.map(node => node.val) : queue.map(node => node.val).reverse();
        result.push(nodes);
        count++;
        
        while (len--) {
            const node = queue.shift();
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    
    return result;
};