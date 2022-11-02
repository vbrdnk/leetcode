/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let ans = [];

    for (const [start, end] of intervals) {
        if (ans.length && start <= ans[ans.length - 1][1]) {
            ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], end);
        } else {
            ans.push([start, end]);
        }
    }

    return ans;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[2,3]])); // [[1,4]
console.log(merge([[1, 4], [0, 2], [3, 5]])); // [[0, 5]

