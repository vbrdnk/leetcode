/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function(n) {
  let sum = 0;
  let product = 1;

  while (n > 0) {
    const lastDigit = n % 10;
    sum += lastDigit;
    product *= lastDigit;

    n = Math.floor(n / 10);
  }

  return product - sum;
};

console.log(subtractProductAndSum(234));
