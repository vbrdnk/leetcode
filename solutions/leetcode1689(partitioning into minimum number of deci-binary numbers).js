/**
 * @param {string} n
 * @return {number}
 */
const minPartitions = function(n) {
    let result = 0;

    for (let i = 0; i < n.length; i++) {
        const curr = Number(n.charAt(i));
        if (curr === 9) {
            return curr;
        }
        result = Math.max(result, curr);
    }

    return result;
};
