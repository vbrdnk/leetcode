/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = function(sentence) {
    if (sentence.length < 26) return false;
    const set = new Set();

    for (let i = 0; i < sentence.length; i++) {
        set.add(sentence.charAt(i));

        if (set.size === 26) return true;
    }

    return set.size === 26;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")); // true
