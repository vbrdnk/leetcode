/**
 * @param {number[]} nums
 * @return {number[]}
 */
 const findDuplicates = function(nums) {
    // O(n) runtime but 1 scan
    // O(1) constant space if not inclusive result
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        let idx = Math.abs(nums[i]) - 1;
        let val = nums[idx];

        if (val < 0) {
            result.push(Math.abs(nums[i]));
        } else {
            nums[idx] = -nums[idx];
        }
    }

    return result;
};

  // O(n) runtime, 1 scan and 1 filtering
  // O(n) space
 const findDuplicates2 = function(nums) {
   const hashMap = {};

   for (let num of nums) {
     if (hashMap[num]) {
       hashMap[num]++;
     } else {
       hashMap[num] = 1;
     }
   }

   return Object.keys(hashMap).filter(key => hashMap[key] > 1);
 }
