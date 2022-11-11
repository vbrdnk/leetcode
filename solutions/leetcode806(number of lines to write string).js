/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
const numberOfLines = function(widths, s) {
    let lines = 1, width = 0;

    for (let char of s) {
        const ascii = char.charCodeAt(0);
        const charWidth = widths[ascii - 97];
        width += charWidth;

        if (width > 100) {
            width = charWidth;
            lines++;
        }
    }

    return [lines, width];
};

console.log(numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "abcdefghijklmnopqrstuvwxyz")); // [3, 60]
console.log(numberOfLines([4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "bbbcccdddaaa")); // [2, 4]
