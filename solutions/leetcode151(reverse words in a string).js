/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    const words = [];
    let ans = '';

    for (let i = 0; i < s.length; i++) {
        let currWord = '';

        while (s.charAt(i) !== ' ' && i < s.length) {
            currWord += s.charAt(i);
            i++;
        }

        if (currWord.length !== 0) {
            words.push(currWord);
            currWord = '';
        }
    }

    return ans.reverse().join(' ');
};


console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWords("a good   example")); // "example good a"
console.log(reverseWords("  hello world  ")); // "world hello"


