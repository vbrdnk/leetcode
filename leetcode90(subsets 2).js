/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function(nums) {
    const result = [];
    nums.sort((a, b) => a -b);

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
    const hash = {};

    for (let el of result) {
        if (hash[el]) continue;
        hash[el] = el;
    }

    return Object.values(hash);
};
