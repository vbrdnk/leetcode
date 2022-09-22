/**
 * @param {string[]} operations
 * @return {number}
 */
const calPoints = function (operations) {
    const record = [];

    for (let operation of operations) {
        if (operation === '+') {
            record.push(record[record.length - 1] + record[record.length - 2]);
        } else if (operation === 'D') {
            record.push(record[record.length - 1] * 2);
        } else if (operation === 'C') {
            record.pop();
        } else {
            record.push(parseInt(operation))
        }
    }


    return record.reduce((acc, curr) => acc + curr, 0);
};

console.log(calPoints(["5", "2", "C", "D", "+"])); // 30
