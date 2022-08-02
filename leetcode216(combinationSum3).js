/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = function(k, n) {
    const result = [];
    const candidates = [1,2,3,4,5,6,7,8,9];


    function dfs(i, candidates, target, slate) {
        // backtracking case
        if (target < 0) return;

        // base case 
        if (target === 0 && slate.length === k) {
            result.push([...slate]);
            return;
        }

        // recurise case
        for (let j = i; j < candidates.length; j++) {
            slate.push(candidates[j]);
            dfs(j + 1, candidates, target - candidates[j], slate);
            slate.pop();
        }
    }

    dfs(0, candidates, n, []);

    return result;
}