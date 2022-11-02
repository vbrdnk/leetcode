/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// Brian Kernighan's Algorithm
const hammingDistance = function(x, y) {
  let val = x ^ y;
  let distance = 0;

  while (val > 0) {
    val = val & (val - 1);
    distance++;
  }

  return distance;
};

const hammingDistance = function(x, y) {
  let val = x ^ y;
  let distance = 0;

  while (val > 0) {
    if (val % 2 === 1) {
      distance++;
    }

    val >>= 1;
  }

  return distance;
};

console.log(hammingDistance(1, 4)); // 2
