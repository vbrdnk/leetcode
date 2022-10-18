/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
    const ans = [];

    function backtrack(i, slate) {
        if (i > nums.length) {
            return;
        }

        ans.push([...slate]);
        for (let j = i; j < nums.length; j++) {
            slate.push(nums[j]);
            backtrack(j + 1, slate);
            slate.pop();
        }
    }

    backtrack(0, []);
    return ans;
};
