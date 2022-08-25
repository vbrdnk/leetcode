/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function(s, indices) {
  let result = new Array(indices.length);

  for (let i = 0; i <= indices.length; i++) {
    result[indices[i]] = s[i];
  }

  return result.join('');
};

console.log(restoreString('codeleet', [4,5,6,7,0,2,1,3])); // 'leetcode'
