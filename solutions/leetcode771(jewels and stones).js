/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function(jewels, stones) {
  const hashSet = new Set();

  for (let jewel of jewels) {
    hashSet.add(jewel);
  }

  let count = 0;

  for (let stone of stones) {
    if (hashSet.has(stone)) {
      count++;
    }
  }

  return count;
};

