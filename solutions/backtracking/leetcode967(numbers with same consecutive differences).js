/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
const numsSameConsecDiff = function(n, k) {
    if (n === 1) {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
    const ans = [];

    function backtrack(numsRemaining, num) {
        if (numsRemaining === 0) {
            ans.push(num);
            return;
        }

        const nextDigits = [];

        const tailDigit = num % 10;
        nextDigits.push(tailDigit + k);

        if (k !== 0) {
            nextDigits.push(tailDigit - k);
        }

        for (const nextDigit of nextDigits) {
            if (nextDigit >= 0 && nextDigit < 10) {
                const newNum = num * 10 + nextDigit;
                backtrack(numsRemaining - 1, newNum);
            }
        }

    }

    for (let i = 1; i < 10; i++) {
        backtrack(n - 1, i);
    }

    return ans;
};

console.log(numsSameConsecDiff(3, 7)); // [181,292,707,818,929]
