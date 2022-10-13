/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const countComponents = function(n, edges) {
    const graph = new Map();
    const visited = new Array(n).fill(false);
    let ans = 0;

    function dfs(node) {
        for (const neighbor of graph.get(node)) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                dfs(neighbor);
            }
        }
    }

    // build graph
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

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            ans++;
            visited[i] = true;
            dfs(i);
        }
    }

    return ans;
};

console.log(countComponents(5, [[0,1],[1,2],[3,4]]));
