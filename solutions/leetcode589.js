/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

// recursive solution
 function preOrder(node, list) {
    list.push(node.val);
    
    for (let i = 0; i < node.children.length; i++) {
        preOrder(node.children[i], list);
    }
    
    return list;
}


// iterative solution
function preOrderWithStack(root) {
    let stack = [root];
    let list = [];
    
    while (stack.length) {
        let node = stack.pop();
        list.push(node.val);

        for (let i = node.children.length - 1; i >= 0; i--) {
            stack.push(node.children[i]);
        }
    }
    
    return list;
}

const preorder = function(root) {
     if (!root) {
        return;
    }

    // recursive solution
    return preOrder(root, []);

    // iterative solution
    // return preOrderWithStack(root);
};