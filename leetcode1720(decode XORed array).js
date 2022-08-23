/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = function(encoded, first) {
  const result = [first];

  for (let i = 0; i < encoded.length; i++) {
    result[i + 1] = encoded[i] ^ result[i];
  }

  return result;
};

console.log(decode([1,2,3], 1)); // [1, 0, 2, 1]
