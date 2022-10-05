/**
 * @param {number[][]} nums
 * @return {number[]}
 */
const intersection = function(nums) {
    let result = []
    let map = {};

    for (let subarray of nums) {
        for (let num of subarray) {
            if (!map[num]) {
                map[num] = 1;
            } else {
                map[num]++;
            }
        }
    }

    console.log(map);

    for (let key of Object.keys(map)) {
        if (map[key] === nums.length) {
            result.push(key)
        }
    }

    return result;
};

console.log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]])); // [3, 4]
