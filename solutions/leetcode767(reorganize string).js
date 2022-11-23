/**
 * @param {string} s
 * @return {string}
 */
const reorganizeString = function(s) {
    let counts = new Map();
    for (let c of s) {
        const count = (counts.get(c) || 0) + 1;
        if (count > (s.length + 1) / 2) return '';
        counts.set(c, count);
    }

    let sort = [...counts].sort((a, b)=> b[1] - a[1]).map(a => a[0]);
    let res = [];
    let index = 0;

    for (let i = 0; i < sort.length; i++) {
        let charCount = counts.get(sort[i]);
        for (let j = 0; j < charCount;j++) {
            if (index >= s.length) index = 1;
            res[index] = sort[i];
            index += 2;
        }
    }

    return res.join('');
};

console.log(reorganizeString('aab')); // aba
console.log(reorganizeString('aaab')); // ''
console.log(reorganizeString('vvvlo')); // vlvov

