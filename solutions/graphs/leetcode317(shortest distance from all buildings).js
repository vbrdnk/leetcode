/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestDistance = function (grid) {
    let minDistance = Number.MAX_VALUE;
    let rows = grid.length;
    let cols = grid[0].length;
    let totalHouses = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1) {
                totalHouses++;
            }
        }
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 0) {
                minDistance = Math.min(minDistance, bfs(grid, row, col, totalHouses));
            }
        }
    }

    return minDistance === Number.MAX_VALUE ? -1 : minDistance;
};


const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} totalHouses
 * @return {number}
 */
function bfs(grid, row, col, totalHouses) {
    let rows = grid.length;
    let cols = grid[0].length;
    let distanceSum = 0;
    let housesReached = 0;

    let queue = [[row, col]];

    let visited = new Array(rows).fill(false).map(() => new Array(cols).fill(false));
    visited[row][col] = true;

    let steps = 0;

    while (queue.length && housesReached !== totalHouses) {
        let nextQueue = [];

        for (let i = 0; i < queue.length; i++) {
            let curr = queue[i];
            const [row, col] = curr;

            if (grid[row][col] === 1) {
                distanceSum += steps;
                housesReached++;
                continue;
            }

            directions.forEach(dir => {
                let nextRow = row + dir[0];
                let nextCol = col + dir[1];

                if (nextRow >= 0 && nextCol >= 0 && nextRow < rows && nextCol < cols) {
                    if (!visited[nextRow][nextCol] && grid[nextRow][nextCol] !== 2) {
                        visited[nextRow][nextCol] = true;
                        nextQueue.push([nextRow, nextCol]);
                    }
                }
            });
        }

        queue = nextQueue;
        steps++;
    }

    if (housesReached !== totalHouses) {
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] === 0 && visited[row][col]) {
                    grid[row][col] = 2;
                }
            }
        }

        return Number.MAX_VALUE;
    }

    return distanceSum;
}
