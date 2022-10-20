/**
 * @param {number[]} nums
 * @return {number}
 */
const largestUniqueNumber = function(nums) {
    const hashMap = new Map();

    for (let num of nums) {
        hashMap.set(num, (hashMap.get(num) || 0) + 1);
    }

    let max = -1;

    for (let [key, value] of hashMap) {
        if (value === 1) {
            max = Math.max(max, key);
        }
    }

    return max;
};

console.log(largestUniqueNumber([5,7,3,9,4,9,8,3,1])); // 8
