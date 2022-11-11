/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
const prisonAfterNDays = function(cells, n) {
    const set = new Set();
    let days = 0;

    for (let i = 0; i < n; i++) {
        const nextDayState = calculateCellsStateForNextDay(cells);

        if (set.has(JSON.stringify(nextDayState))) {
            return prisonAfterNDays(cells, n % days);
        }

        set.add(JSON.stringify(nextDayState));
        days++;
        cells = nextDayState;
    }

    return cells;
};

function calculateCellsStateForNextDay(cells) {
    const tempCells = new Array(8);

    for (let i = 0; i < cells.length; i++) {
        if (cells[i - 1] === cells[i + 1]) {
            tempCells[i] = 1;
        } else {
            tempCells[i] = 0;
        }
    }

    return tempCells;
}

console.log(prisonAfterNDays([0,1,0,1,1,0,0,1], 7)); // [0,0,1,1,0,0,0,0]
console.log(prisonAfterNDays([1,0,0,1,0,0,1,0], 1000000000)); // [0,0,1,1,1,1,1,0]

