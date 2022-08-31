/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 const reverseStr = function(s, k) {
    const strLetters = s.split('');
    for (let i = 0; i < strLetters.length; i += 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, strLetters.length - 1);

        while (left < right) {
            const temp = strLetters[left];
            strLetters[left] = strLetters[right];
            strLetters[right] = temp;
            left++;
            right--;
        }

    }

    return strLetters.join('');
};