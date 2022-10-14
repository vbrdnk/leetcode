/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
const distanceK = function(root, target, k) {
    let queue = [target];
    let seen = new Set([target]);
    let distance = 0;

    function dfs(node, parent) {
        if (!node) return;

        node.parent = parent;
        dfs(node.left, node);
        dfs(node.right, node);
    }

    dfs(root, null);

    while (queue.length && distance < k) {
        let len = queue.length;
        let nextQueue = [];

        for (let i = 0; i < len; i++) {
            let node = queue[i];

            for (const neighbor of [node.left, node.right, node.parent]) {
                if (neighbor && !seen.has(neighbor)) {
                    seen.add(neighbor);
                    nextQueue.push(neighbor);
                }
            }
        }

        queue = nextQueue;
        distance++;
    }

    return queue.map(node => node.val);
};
