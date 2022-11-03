/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function(obstacleGrid) {
    const n = obstacleGrid.length;
    const m = obstacleGrid[0].length;

    if (obstacleGrid[0][0] === 1) {
        return 0;
    }

    obstacleGrid[0][0] = 1;

    for (let i = 1; i < n; i++) {
        obstacleGrid[i][0] = (obstacleGrid[i][0] === 0 && obstacleGrid[i - 1][0] === 1) ? 1 : 0;
    }

    for (let i = 1; i < m; i++) {
        obstacleGrid[0][i] = (obstacleGrid[0][i] === 0 && obstacleGrid[0][i - 1] === 1) ? 1 : 0;
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (obstacleGrid[i][j] === 0) {
                obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
            } else {
                obstacleGrid[i][j] = 0
            }
        }
    }

    return obstacleGrid[n - 1][m - 1];
};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])); // 2
console.log(uniquePathsWithObstacles([[0,1],[0,0]])); // 1
