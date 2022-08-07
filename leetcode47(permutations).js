/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const permuteUnique = function(nums) {
    const result = [];

    function dfs(i, slate) {
        // base
        if (i === slate.length) {
            result.push([...slate]);
            return;
        }
        
        const visited = new Set();

        // recursive case
        for (let j = i; j < slate.length; j++) {
            if (visited.has(slate[j])) continue;
            visited.add(slate[j]);
            [slate[i], slate[j]] = [slate[j], slate[i]];
            dfs(i + 1, slate);
            [slate[i], slate[j]] = [slate[j], slate[i]];
        }
    }

    dfs(0, nums);

    return result;
};