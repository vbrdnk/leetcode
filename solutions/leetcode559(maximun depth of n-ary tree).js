/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
const maxDepth = function(root) {
    if (!root) return 0;
    let depthLevel = 0;

    const stack = [root];

    while (stack.length) {
        let len = stack.length;
        depthLevel++;

        while(len--) {
            const node = stack.shift();
            if (node.children) {
                stack.push(...node.children);
            }
        }
    }

    return depthLevel;
};

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
const maxDepthRecursive = function(root) {
    if (!root) return 0;
    let depthLevel = 0;

    for (let child of root.children) {
        depthLevel = Math.max(depthLevel, maxDepth(child));
    }

    return depthLevel + 1;
};



