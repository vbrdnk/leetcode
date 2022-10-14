/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = function(grid) {
    const n = grid.length;
    const seen = Array.from(Array(n), () => new Array(n).fill(false));
    seen[0][0] = true;

    function isValid(row, col) {
        return row >= 0 && row < n && col >= 0 && col < n && grid[row][col] === 0;
    }

    if (grid[0][0] == 1) {
        return -1;
    }

    const directions = [[0, 1], [1, 0], [1, 1], [-1, -1], [-1, 1], [1, -1], [0, -1], [-1, 0]];
    let steps = 0;
    let queue = [[0, 0]]; // row, col

    while (queue.length)  {
        let len = queue.length;
        let nextQueue = [];
        steps++;

        for (let i = 0; i < len; i++) {
            const [row, col] = queue[i];
            if (row == n - 1 && col === n - 1) {
                // end of matrix
                return steps;
            }

            for (const [dx, dy] of directions) {
                const nextRow = row + dy;
                const nextCol = col + dx;
                if (isValid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                    seen[nextRow][nextCol] = true;
                    nextQueue.push([nextRow, nextCol]);
                }
            }
        }

        queue = nextQueue;
    }

    return -1;
};

console.log(shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]])); // 4
console.log(shortestPathBinaryMatrix([[1,0,0],[1,1,0],[1,1,0]])); // -1
