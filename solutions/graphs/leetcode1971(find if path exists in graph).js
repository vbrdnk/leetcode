/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const validPath = function(n, edges, source, destination) {
    const visited = new Array(n).fill(false);
    visited[source] = true;

    const graph = new Map();

    // build graph
    for (let i = 0; i < n; i++) {
       if (!graph.has(i)) {
           graph.set(i, []);
       }
    }

    for (let edge of edges) {
        const [x, y] = edge;

        graph.get(x).push(y);
        graph.get(y).push(x);
    }

    const stack = [source];

    while (stack.length) {
        const vertex = stack.pop();

        if (vertex === destination) {
            return true;
        }

        for (let neighbor of graph.get(vertex)) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                stack.push(neighbor);
            }
        }
    }

    return false;
};

console.log(validPath(3, [[0,1],[1,2],[2,0]], 0 , 2)); // true
console.log(validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0 , 5)); // false

