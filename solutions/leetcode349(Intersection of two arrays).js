/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 const intersection = function(nums1, nums2) {
    const hashTable = new Set();
    let result = [];
    
    for (let num of nums1) {
        hashTable.add(num);
    }
    
    for (let num of nums2) {
        if (hashTable.has(num)) {
            result.push(num);
            hashTable.delete(num);
        }
    }
    
    return result;
};