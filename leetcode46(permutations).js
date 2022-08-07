 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
    const result = [];

    function dfs(i, slate) {
        // base case
        if (i === nums.length) {
            result.push([...slate]);
            return;
        }

        // recursive case
        for (let j = i; j < nums.length; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            dfs(i + 1, slate);
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }



    }
    
    dfs(0, nums);
    return result;
};