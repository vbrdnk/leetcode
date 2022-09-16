/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
const isLongPressedName = function(name, typed) {
    if (name.length > typed.length) return false;

    let i = 0;
    let m = name.length;
    let n = typed.length;

    for (let j = 0; j < n; j++) {
        if (i < m && name.charAt(i) === typed.charAt(j)) {
            i++;
        } else if (j == 0 || typed.charAt(j) !== typed.charAt(j - 1)) {
            return false
        }
    }

    return i === m;
};
