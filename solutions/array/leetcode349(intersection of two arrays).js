/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
    const hashMap = new Set();
    const result = [];

    for (let num of nums1) {
        hashMap.add(num);
    }

    for (let num of nums2) {
        if (hashMap.has(num)) {
            result.push(num);
            hashMap.delete(num)
        }
    }

    return result;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection2 = function(nums1, nums2) {
    nums1.sort((a, b ) => a - b);
    nums2.sort((a, b) => a - b);

    const result = [];

    let l = 0;
    let r = 0;

    while ((nums2[l] && nums1[r]) !== undefined) {
        const left = nums1[r];
        const right = nums2[l];

        if (right === left) {
            result.push(right);
            while (left === nums1[r]) r++;
            while (right === nums2[l]) l++;

            continue;
        }

        if (right > left) {
            while (left === nums1[r]) {
                r++;
            }
        } else {
            while (right === nums2[l]) {
                l++;
            }
        }

    }

    return result;
};

console.log(intersection2([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection2([4, 9, 5], [9, 4, 9, 8, 4])); // [9, 4]
