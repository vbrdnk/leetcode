/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function(x, y) {
  let val = x ^ y;
  let distance = 0;

  while (val > 0) {
    val &= val - 1;
    distance++;
  }

  return distance;
};

console.log(hammingDistance(1, 4)); // 2
