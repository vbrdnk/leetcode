/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function(candidates, target) {
    const result = [];
    candidates.sort((a,b) => a - b);


    function dfs(i, candidates, target, slate) {
        // backtracking case
        if (target < 0) return;

        // base case
        if (target === 0) {
            result.push([...slate]);
            return;
        }

        // recurise case
        for (let j = i; j < candidates.length; j++) {
            if (i !== j && candidates[j] === candidates[j - 1]) continue;
            slate.push(candidates[j]);
            dfs(j + 1, candidates, target - candidates[j], slate);
            slate.pop();
        }
    }

    dfs(0, candidates, target, []);

    return result;
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8));