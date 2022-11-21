/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
const nearestExit = function(maze, entrance) {
    const rows = maze.length;
    const cols = maze[0].length;
    const [startRow, startCol] = entrance;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    function isValid(row, col) {
        return row >= 0 && row < rows && col >= 0 && col < cols && maze[row][col] === '.';
    }

    maze[startRow][startCol] = '+';

    const queue = [[startRow, startCol, 0]];

    while (queue.length) {
        const [currRow, currCol, currDistance] = queue.shift();

        for (const direction of directions) {
            const nextRow = currRow + direction[0], nextCol = currCol + direction[1];

            if (isValid(nextRow, nextCol)) {
                if (isExit(nextRow, nextCol, rows, cols)) {
                    return currDistance + 1;
                }

                maze[nextRow][nextCol] = '+';
                queue.push([nextRow, nextCol, currDistance + 1]);
            }
        }
    }

    return -1;
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} totalRows
 * @param {number} totalRows
 * @return {boolean}
 */
function isExit(row, col, totalRows, totalCols) {
    return row === 0 || row === totalRows - 1 || col === 0 || col === totalCols - 1;
}
