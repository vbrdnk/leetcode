/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function(nums) {
    let count = 0;

    for (let num of nums) {
        if (isEven(num)) count++;
    }

    return count;

};

function isEven(num) {
    let digits = 0;

    while (num > 0) {
        digits++;
        num = parseInt(num / 10);
    }

    return digits % 2 === 0;
}
