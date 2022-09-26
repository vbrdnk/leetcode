/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function(graph) {
    const result = [];

    function dfs(i, graph, slate) {
        slate.push(i);

        if (i === graph.length - 1) {
            result.push([...slate]);
            return;
        }

        for (let j = 0; j < graph[i].length; j++) {
            dfs(graph[i][j], graph, slate);
            slate.pop();
        }
    }

    dfs(0, graph, []);

    return result;
};

console.log(allPathsSourceTarget([[1,2], [3], [3], []])); // [0, 1, 3], [0, 2, 3]
