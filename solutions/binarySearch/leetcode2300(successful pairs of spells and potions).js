/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
const successfulPairsBruteForce = function(spells, potions, success) {
    const ans = new Array(spells.length);

    for (let i = 0; i < spells.length; i++) {
        let count = 0;

        for (let j = 0; j < potions.length; j++) {
            if (spells[i] * potions[j] >= success) {
                count++;
            }
        }

        ans[i] = count;
    }

    return ans;
};

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
const successfulPairs = function(spells, potions, success) {
    function binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return left;
    }

    potions.sort((a, b) => a - b);
    let ans = [];
    let m = potions.length;

    for (const spell of spells) {
        let i = binarySearch(potions, success / spell);
        ans.push(m - i);
    }

    return ans;
};

// console.log(successfulPairs([5,1,3], [1,2,3,4,5], 7)); // [4,0,3]
console.log(successfulPairs([3,1,2], [8,5,8], 16)); // [2,0,2]

