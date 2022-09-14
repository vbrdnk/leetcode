/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    const hashMap = new Set();

    for (let num of nums) {
        hashMap.add(num);
    }

    for (let i = 0; i <= nums.length; i++) {
        if (!hashMap.has(i)) {
            return i;
        }
    }
};

const missingNumberBitwise = function(nums) {
    let res = nums.length;
    for(let i = 0; i < nums.length; i++){
        res ^= i;
        res ^= nums[i];
    }

    return res;
};



console.log(missingNumber([0, 3, 1])); // 2
console.log(missingNumber([0, 1])); // 2
