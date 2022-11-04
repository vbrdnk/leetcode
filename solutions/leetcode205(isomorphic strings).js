/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 const isIsomorphic = function(s, t) {
    let hashMap = {};
    const set = new Set();

    for (let i = 0; i < s.length; i++) {
        const char1 = s.charAt(i);
        const char2 = t.charAt(i);


        if (hashMap[char1]) {
            if (hashMap[char1] !== char2) {
                return false;
            }
        } else {
            if (set.has(char2)) {
                return false;
            }

            hashMap[char1] = char2;
            set.add(char2);
        }
    }

    return true;
};


console.log(isIsomorphic('ab', 'aa'));
