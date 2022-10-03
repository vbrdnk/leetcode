/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function(nums, k) {
   let sum = 0;

   for (let i = 0; i < k; i++) {
       sum += nums[i];
   }

   let res = sum;

   for (let i = k; i < nums.length; i++) {
       sum += nums[i] - nums[i - k];
       res = Math.max(res, sum);
   }

   return res / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.7500
