/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function(isConnected) {
    let len = isConnected.length;
    let visited = new Array(len).fill(false);
    let count = 0;

    const graph = new Map();

    function dfs(node) {
        for (const neighbor of graph.get(node)) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                dfs(neighbor);
            }
        }
    }

    function dfsWithStack(node) {
        const stack = [node];
        while (stack.length) {
            const curr = stack.pop();

            for (const neighbor of graph.get(curr)) {
                if (!neighbor) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            }
        }
    }

    // build the graph
    for (let i = 0; i < len; i++) {
        if (!graph.get(i)) {
            graph.set(i, []);
        }

        for (let j = i + 1; j < len; j++) {
            if (!graph.get(j)) {
                graph.set(j, []);
            }

            if (isConnected[i][j] === 1) {
                graph.get(i).push(j);
                graph.get(j).push(i);
            }
        }
    }

    for (let i = 0; i < len; i++) {
        if (!visited[i]) {
            count++;
            visited[i] = true;
            dfs(i);
        }
    }

    return count;
};
