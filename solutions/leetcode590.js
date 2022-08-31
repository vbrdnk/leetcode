/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 const postorder = function(root) {
    if (!root) {
        return [];
    }

    return postOrder(root, []);   
};

const postOrder = (node, list) => {
    for (let child of node.children) {
        postOrder(child, list);
    }
    
    list.push(node.val)
    
    return list;
}