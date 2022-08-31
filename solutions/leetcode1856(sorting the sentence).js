/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = function(s) {
    const words = s.split(' ');

    words.sort((a, b) => {
        return a[a.length -1] - b[b.length -1];
    });

    return words.map(word => word.slice(0, - 1)).join(' ');
};

const sortSentence2 = function(s) {
    const words = s.split(' ');

    const result = [];

    for (let word of words) {
        const idx = word[word.length - 1];
        result[idx - 1] = word.substring(0, word.length - 1);;
    }

    return result.join(' ');
}

console.log(sortSentence2('is2 sentence4 This1 a3'));
