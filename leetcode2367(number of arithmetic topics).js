/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
const arithmeticTriplets = function(nums, diff) {
    let count = 0;
    const hashMap = new Set();

    for (let num of nums) {
        if (hashMap.has(num - diff) && hashMap.has(num - diff * 2)) {
            count++;
        }

        hashMap.add(num);
    }

    return count;
};

console.log(arithmeticTriplets([0,1,4,6,7,10], 3));
