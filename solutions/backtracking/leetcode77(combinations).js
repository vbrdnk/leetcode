/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function(n, k) {
    let ans = [];

    function backtrack(i, slate) {
        if (slate.length === k) {
            ans.push([...slate]);
            return;
        }

        for (let j = i; j <= n; j++) {
            slate.push(j);
            backtrack(j + 1, slate);
            slate.pop();
        }
    }

    backtrack(1, []);
    return ans;
};
