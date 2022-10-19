/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
    const ans = [];

    function backtrack(i, currentSum, slate) {
        if (currentSum > target) return;

        if (currentSum === target) {
            ans.push([...slate]);
            return;
        }

        for (let j = i; j < candidates.length; j++) {
            let num = candidates[j];
            let newSum = currentSum + num;
            slate.push(num);
            backtrack(j, currentSum + num, slate);
            slate.pop();
        }
    }

    backtrack(0, 0, []);

    return ans;
};

console.log(combinationSum([2,3,6,7], 7)); // [[2, 2, 3], [7]]
