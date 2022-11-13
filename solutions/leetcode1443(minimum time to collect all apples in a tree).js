/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
const minTime = function(n, edges, hasApple) {
    const graph = createGraph(n, edges);
    const seen = new Array(n).fill(false);


    function dfs(node, currCost) {
        if (seen[node]) {
            return 0;
        }

        seen[node] = true;

        let childrenCost = 0;

        for (const neighbor of graph.get(node)) {
            childrenCost += dfs(neighbor, 2);
        }

        if (childrenCost === 0 && !hasApple[node]) {
            return 0;
        }

        return childrenCost + currCost;
    }

    return dfs(0, 0);
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {Map}
 */
function createGraph(n, edges) {
    const graph = new Map();

    for (let i = 0; i < n; i++) {
        graph.set(i, graph.get(i) || []);
    }

    for (let edge of edges) {
        const [x, y] = edge;

        graph.get(x).push(y);
        graph.get(y).push(x);
    }

    return graph;
}

console.log(minTime(7, [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], [false,false,true,false,true,true,false])); // 8
