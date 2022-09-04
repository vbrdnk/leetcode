/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
    let fast = n;
    let slow = n;

    while (true) {
        fast = getNumSum(getNumSum(fast));
        slow = getNumSum(slow);

        if (fast === slow) {
            return fast === 1;
        }
    }
};


function getNumSum(num) {
    let total = 0;

    while (num !== 0) {
        const lastDigit = num % 10;
        num = Math.floor(num / 10);
        total += Math.pow(lastDigit, 2);
    }

    return total;
}
