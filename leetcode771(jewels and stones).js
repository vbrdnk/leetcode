/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function(jewels, stones) {
  const hashMap = {};

  for (let stone of stones) {
    if (!hashMap[stone]) {
      hashMap[stone] = 1;
    } else {
      hashMap[stone]++;
    }
  }

  return jewels.split('').reduce((acc, jewel) => {
    if (hashMap[jewel]) {
      return acc + hashMap[jewel];
    } else {
      return acc;
    }
  }, 0);
};
