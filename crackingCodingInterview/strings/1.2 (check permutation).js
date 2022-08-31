/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
const checkPermutation = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    const map = {};

    for (let i = 0; i < str1.length; i++) {
        if (!map[str1[i]]) {
            map[str1[i]] = 1;
        } else {
            map[str1[i]]++;
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (!map[str2[i]]) return false;

        if (map[str2[i]]) {
            map[str2[i]]--;
        }
    }

    return true;
}

console.log(checkPermutation('abcd', 'bcad'));
console.log(checkPermutation('abcd', 'bade'));
console.log(checkPermutation('cadd', 'bacdd'));

