/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
const prefixesDivBy5 = function(nums) {
    const ans = [];
    let acc = 0;

    for (const num of nums) {
        acc = (acc * 2 + num) % 5;
        ans.push(acc === 0);
    }

    return ans;
};

console.log(prefixesDivBy5([0, 1, 1])); // [true, false, false];
console.log(prefixesDivBy5([1, 1, 1])); // [false, false, false];

