/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countKDifference = function (nums, k) {
    const map = new Map();
    let result = 0;

    for (let num of nums) {
        if (map.has(num - k)) result += map.get(num - k);
        if (map.has(num + k)) result += map.get(num + k);

        map.set(num, map.has(num) ? map.get(num) + 1 : 1);
    }

    return result;
};

console.log(countKDifference([1, 2, 2, 1], 1)); // 4
