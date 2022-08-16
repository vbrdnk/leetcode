/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  const hashMap = {};
  const sortedStrs = strs.map(str => str.split('').sort().join(''));

  for (let i = 0; i < sortedStrs.length; i++) {
    const str = sortedStrs[i];
    if (!hashMap[str]) {
      hashMap[str] = [strs[i]];
    } else {
      hashMap[str].push(strs[i]);
    }
  }

  return Object.values(hashMap);
};
