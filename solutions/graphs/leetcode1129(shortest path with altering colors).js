/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
const shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    const graph = new Map();
    const RED = 0;
    const BLUE = 1;
    graph.set(RED, new Map());
    graph.set(BLUE, new Map());
    addToGraph(RED, redEdges);
    addToGraph(BLUE, blueEdges);

    function addToGraph(color, edges) {
        for (let i = 0; i < n; i++) {
            graph.get(color).set(i, []);
        }

        for (const [x, y] of edges) {
            graph.get(color).get(x).push(y);
        }
    }

    let ans = new Array(n).fill(Infinity);
    let queue = [[0, RED], [0, BLUE]];
    const seen = Array.from(Array(n), () => new Array(2).fill(false));

    let steps = 0;

    while (queue.length) {
        let len = queue.length;
        let nextQueue = [];

        for (let i = 0; i < len; i++) {
            let [node, color] = queue[i];
            ans[node] = Math.min(ans[node], steps);

            for (const neighbor of graph.get(color).get(node)) {
                if (!seen[neighbor][1 - color]) {
                    seen[neighbor][1 - color] = true;
                    nextQueue.push([neighbor, 1 - color]);
                }
            }
        }

        queue = nextQueue;
        steps++;
    }

    for (let i = 0; i < n; i++) {
        if (ans[i] == Infinity) {
            ans[i] = -1;
        }
    }

    return ans;
};
