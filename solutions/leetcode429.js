/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 const levelOrder = function(root) {
    if (!root) {
        return [];
    }
    
    let queue = [root];
    let result = [];
    
    while (queue.length) {
        let len = queue.length;
        result.push(queue.map(node => node.val));
        
        while (len--) {
            const node = queue.shift();
            if (node.children) {
                for (let child of node.children) {
                    queue.push(child);
                }
            }
        }
    }
    
    return result;
};