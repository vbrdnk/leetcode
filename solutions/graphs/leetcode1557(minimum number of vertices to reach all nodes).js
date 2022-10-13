/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findSmallestSetOfVertices = function(n, edges) {
    const indegree = new Array(n).fill(0);
    let ans = [];

    for (let [outdegreeNode, indegreeNode] of edges) {
        indegree[indegreeNode]++;
    }

    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) {
            ans.push(i);
        }
    }

    return ans;
};
