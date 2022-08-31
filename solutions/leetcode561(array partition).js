/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function(nums) {
 // sort and sum up the minimum of the pairs
 return nums
   .sort((a, b) => a - b)
   .reduce((sum, cur, i) => (i % 2 === 0) ? sum += cur : sum, 0);
};

console.log(arrayPairSum([1,4,3,2]));
