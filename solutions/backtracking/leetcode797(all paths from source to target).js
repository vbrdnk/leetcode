/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function(graph) {
    const ans = [];

    function backtrack(i, slate) {
        slate.push(i);
        if (i === graph.length - 1) {
            ans.push([...slate]);
            return;
        }

        for (let j = 0; j < graph[i].length; j++) {
            backtrack(graph[i][j], slate);
            slate.pop();
        }
    }

    backtrack(0, []);
    return ans;
};
