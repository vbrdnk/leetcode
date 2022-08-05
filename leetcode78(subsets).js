/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
    const result = [];

    function dfs(i, input, slate) {
        // base case
        if (i === nums.length) {
            result.push([...slate]);
            return;
        }


        // recursive case

        // exclude
        dfs(i + 1, nums, slate);

        // include
        slate.push([nums[i]]);
        dfs(i + 1, nums, slate);
        slate.pop();
    }

    dfs(0, nums, []);

    return result;
};
