/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
const minReorder = function(n, connections) {

    function hash(row, col) {
        return `${row},${col}`;
    }

    function dfs(node) {
        let ans = 0;

        for (const neighbor of graph.get(node)) {
            if (!seen[neighbor]) {
                if (roads.has(hash(node, neighbor))) {
                    ans++;
                }

                seen[neighbor] = true;
                ans += dfs(neighbor);
            }
        }

        return ans;
    }

    const roads = new Set();
    const graph = new Map();
    const seen = new Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }

    for (const [x, y] of connections) {
        graph.get(x).push(y);
        graph.get(y).push(x);

        roads.add(hash(x, y));
    }

    seen[0] = true;

    return dfs(0);
};
