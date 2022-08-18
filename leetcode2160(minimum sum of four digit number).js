/**
 * @param {number} num
 * @return {number}
 */
const minimumSum = function(num) {
  const digits = [];
  for(let i = 0; i < 4; i++){
    digits.push(~~num % 10)
    num /= 10
  }
  const sorted = digits.sort((a,b) => b - a);

  return sorted[0] + sorted[1] + (10 *( sorted[2] + sorted[3]))
};

const minimumSum2 = function(num) {
  const nums = num.toString().split('').sort();
  return (parseInt(nums[0] + nums[2]) + parseInt(nums[1] + nums[3]));
};
