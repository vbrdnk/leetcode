/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
const arithmeticTriplets = function(nums, diff) {
    const map = new Set();
    let count = 0;

    for (let num of nums) {
        if (map.has(num - diff) && map.has(num - diff * 2)) {
            count++;
        }

        map.add(num);
    }

    return count;
};

console.log(arithmeticTriplets([0,1,4,6,7,10], 3));
