/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = function(n, start) {
    const result = new Array(n);

    for (let i = 0; i < n; i++) {
        result[i] = start + i * 2;
    }

    return result.reduce((prev, curr) => prev ^ curr, 0);
};

const xorOperation2 = function(n, start) {
    let result = 0;

    for (let i = 0; i < n; i++) {
        result ^= start + i * 2;
    }

    return result;
}


console.log(xorOperation(5, 0));
console.log(xorOperation2(5, 0));

