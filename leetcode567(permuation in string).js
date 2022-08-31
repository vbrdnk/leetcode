/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
    if (!s1 || !s2) {
        return false;
    }

    for (let i = 0; i < s2.length; i++) {
        if (isPermutation(s1, s2.slice(i, i + s1.length))) {
            return true;
        }
    }

    return false;
};

function isPermutation(a, b) {
    if (a.length !== b.length) return false;
    const map = {};

    for (let i = 0; i < a.length; i++) {
        if (!map[a[i]]) {
            map[a[i]] = 1;
        } else {
            map[a[i]]++;
        }
    }

    for (let i = 0; i < b.length; i++) {
        if (!map[b[i]]) return false;
        map[b[i]]--;
    }

    return true;
}

console.log(checkInclusion('ab', 'eidbaooo'));
console.log(checkInclusion('ab', 'eidboaoo'));

