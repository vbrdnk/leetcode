/**
 * @param {string} str
 * @return {boolean}
 */
const isUnique = (str) => {
    const hashMap = {};

    for (let i = 0; i < str.length; i++) {
        if (!hashMap[str[i]]) {
            hashMap[str[i]] = 1;
        } else {
            return false;
        }
    }

    return true;
}

/**
 * @param {string} str in ASCII
 * @return {boolean}
 */
const isUnique2 = (str) => {
    if (str.length > 128) return false;

    const charSet = new Array(128);

    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);

        if (charSet[char]) {
            return false;
        } else {
            charSet[char] = true;
        }
    }

    return true;
}

console.log(isUnique('abcd'));
console.log(isUnique('abbcdeb'));

console.log(isUnique2('abcd'));
console.log(isUnique2('abbcdeb'));
