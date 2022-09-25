/**
 * @param {string} s
 * @return {string}
 */
const replaceDigits = function(s) {
    let chars = s.split('');
    let result = [];

    for (let i = 0; i < s.length; i++) {
         result.push(i % 2 === 0 ? chars[i] : String.fromCharCode(s.charCodeAt(i - 1) + Number(chars[i])));
    }

    return result.join('');
};

console.log(replaceDigits('a1c1e1')); // abcdef

