/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = function (node) {
    const hashMap = {};

    function bfs(node) {
        if (!node) return node;
        if (!hashMap[node.val]) {
            hashMap[node.val] = new Node(node.val);
            hashMap[node.val].neighbors = node.neighbors.map(bfs);
        }

        return hashMap[node.val];
    }

    return bfs(node);

};
