/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = function(num) {
  if (!num) return 0
  let count = 0;

  while (num) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num -= 1;
    }

    count++;
  }

  return count;
};

const numberOfSteps2 = function(num) {
  if (!num) return 0;
  let count = 0;

  while (num) {
    count += (num & 1) ? 2 : 1;
    num >>= 1;
  }

  return count - 1;
}
