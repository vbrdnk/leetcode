/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
    const counts = new Map();
    const ans = [];

    for (const num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }

    const sorted = [...counts.entries()].sort((a, b) => a[1] - b[1]);

    while (k--) {
        const [key, count] = sorted.pop();
        ans.push(key);
    }

    return ans;
};

// console.log(topKFrequent([1,1,1,2,2,3], 2)); // [1, 2]
console.log(topKFrequent([5,3,1,1,1,3,73,1], 2)); // [1, 3]
