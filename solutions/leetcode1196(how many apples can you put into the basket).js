/**
 * @param {number[]} weight
 * @return {number}
 */
const maxNumberOfApples = function(weight) {
    weight.sort((a, b) => a - b);
    let count = 0;
    let capacity = 5000;

    for (let w of weight) {
        capacity -= w;

        if (capacity < 0) {
            break
        };

        count++;
    }

    return count;
};
