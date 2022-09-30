/**
 * @param {string} boxes
 * @return {number[]}
 */
const minOperations = function(boxes) {
    if (!boxes.length) return [];
    const result = [];

    for (let i = 0; i < boxes.length; i++) {
        let steps = 0;

        for (let j = 0; j < boxes.length; j++) {
           if (boxes.charAt(j) === '1') steps += Math.abs(Number(j - i));
        }

        result.push(steps);
    }

    return result;
};

console.log(minOperations('110')); // [1, 1, 3]
