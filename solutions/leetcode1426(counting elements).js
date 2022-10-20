/**
 * @param {number[]} arr
 * @return {number}
 */
const countElements = function(arr) {
    if (arr.length <= 1) return 0;

    const hashSet = new Set();
    let ans = 0;

    for (let num of arr) {
        hashSet.add(num);
    }

    for (let num of arr) {
        if (hashSet.has(num + 1)) {
            ans++;
        }
    }

    return ans;
};
