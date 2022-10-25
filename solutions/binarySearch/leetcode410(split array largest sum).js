/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const splitArray = function(nums, k) {
    let left = Math.max(...nums);
    let right = nums.reduce((x, y) => {
        return x + y;
    }, 0);

    let maxSum = 0;

    while (left <= right) {
        let threshold = Math.floor(left + (right - left) / 2);

        if (minimumSubarraysRequired(nums, threshold) <= k) {
            console.log(threshold, minimumSubarraysRequired(nums, threshold));

            right = threshold - 1;
            maxSum = threshold;
        } else {
            left = threshold + 1;
        }
    }

    return maxSum;
};

/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
function minimumSubarraysRequired(nums, threshold) {
   let currentSum = 0;
   let splitsRequired = 0;

   for (const num of nums) {
       if (currentSum + num <= threshold) {
           currentSum += num;
       } else {
           currentSum = num;
           splitsRequired++;
       }
   }

   return splitsRequired + 1;
}


console.log(splitArray([7,2,5,10,8],  2)); // 18
