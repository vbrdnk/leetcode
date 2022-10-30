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

    function isExit(row, col) {
        return row === 0 || row === rows - 1 || col === 0 || col === cols - 1;
    }

    maze[startRow][startCol] = '+';

    const queue = [[startRow, startCol, 0]];

    while (queue.length) {
        const [currRow, currCol, currDistance] = queue.shift();

        for (const direction of directions) {
            const nextRow = currRow + direction[0], nextCol = currCol + direction[1];

            if (isValid(nextRow, nextCol)) {

                if (isExit(nextRow, nextCol)) {
                    return currDistance + 1;
                }

                maze[nextRow][nextCol] = '+';
                queue.push([nextRow, nextCol, currDistance + 1]);
            }
        }
    }

    return -1;
};
