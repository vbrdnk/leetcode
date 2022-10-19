/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = function(k, n) {
    const candidates = [1,2,3,4,5,6,7,8,9];
    const ans = [];

    function backtrack(start, currSum, slate) {
        if (currSum > n) {
            return;
        }

        if (currSum === n && slate.length === k) {
            ans.push([...slate]);
            return;
        }

        for (let j = start; j < candidates.length; j++) {
            const candidate = candidates[j];
            const newSum = candidate + currSum;
            slate.push(candidate);
            backtrack(j + 1, newSum, slate);
            slate.pop();
        }
    }

    backtrack(0, 0, []);

    return ans;
};
