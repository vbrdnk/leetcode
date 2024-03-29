/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function(nums1, nums2) {
    if (nums1.length <= 1) return [-1];

    const map = new Map();
    const stack = [];
    const result = [];


    for (let num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            map.set(stack.pop(), num);
        }
        stack.push(num);
    }

    for (let i = 0; i < nums1.length; i++) {
        result[i] = map.get(nums1[i]) || -1;
    }

    return result;
};

console.log(nextGreaterElement([4,1,2], [1,3,4,2])); // [-1,3,-1]
