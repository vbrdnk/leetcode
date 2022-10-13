/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
const reachableNodes = function (n, edges, restricted) {
    const seen = new Array(n).fill(false);
    let visited = 0;
    const graph = new Map();

    for (let node of restricted) {
        seen[node] = true;
    }

    for (let i = 0; i < n; i++) {
        if (!graph.get(i)) {
            graph.set(i, []);
        }
    }

    for (let edge of edges) {
        const [x, y] = edge;
        graph.get(x).push(y);
        graph.get(y).push(x);
    }

    dfs(0);

    function dfs(node) {
        if (seen[node]) return;

        seen[node] = true;
        visited++;
        const neighbors = graph.get(node);

        for (let neighbor of neighbors) {
            dfs(neighbor);
        }
    }

    return visited;
};

console.log(reachableNodes(7, [[0, 1], [1, 2], [3, 1], [4, 0], [0, 5], [5, 6]], [4, 5])); // 4


