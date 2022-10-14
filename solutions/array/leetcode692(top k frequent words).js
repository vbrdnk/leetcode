/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = function(words, k) {
    const counts = new Map();
    const ans = [];

    for (let word of words) {
        counts.set(word, (counts.get(word) || 0) + 1);
    }

    const entries = [...counts].sort((a, b) => {
       if (a[1] !== b[1]) {
          return b[1] > a[1] ? 1 : -1;
       } else {
           return b[0] < a[0] ? 1 : - 1;
       }
    });

    for (let i = 0; i < k; i++) {
        ans.push(entries[i][0]);
    }

    return ans;
};

console.log(topKFrequent(["i","love","leetcode","i","love","coding"],  2)); // ['i', 'love'];
console.log(topKFrequent(["i","love","leetcode","i","love","coding"],  3)); // ['i', 'love'];
console.log(topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"],4));

