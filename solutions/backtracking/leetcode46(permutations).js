/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
    const result = [];

    function backtrack(slate) {
        if (slate.length === nums.length) {
            result.push([...slate]);
            return;
        }

        for (let num of nums) {
            if (slate.includes(num)) {
                continue;
            }

            slate.push(num);
            backtrack(slate);
            slate.pop();
        }
    }

    backtrack([]);
    return result;
};
