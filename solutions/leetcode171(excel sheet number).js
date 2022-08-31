/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
    let sum = 0
    for (let i = 0; i < columnTitle.length; i++) {
        const exp = columnTitle.length - 1 - i
        sum += (columnTitle[i].charCodeAt(0) - 64) * (26 ** exp)
    }
    
    return sum;
};