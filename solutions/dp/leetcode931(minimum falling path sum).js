/**
 * @param {number[][]} matrix
 * @return {number}
 */
// brute force
const minFallingPathSum = function(matrix) {
    let minSum = Number.MAX_VALUE;
    const memo = new Array(matrix.length).fill().map(() => new Array(matrix.length).fill(null));

    for (let startCol = 0; startCol < matrix.length; startCol++) {
        minSum = Math.min(minSum, dfs(0, startCol));
    }

    function dfs(row, col) {
        if (col < 0 || col === matrix.length) {
            return Number.MAX_VALUE;
        }

        if (row === matrix.length - 1) {
            return matrix[row][col];
        }

        if (memo[row][col] !== null) {
            return memo[row][col];
        }

        const left = dfs(row + 1, col - 1);
        const middle = dfs(row + 1, col);
        const right = dfs(row + 1, col + 1);


        memo[row][col] = Math.min(left, middle, right) + matrix[row][col];
        return memo[row][col];
    }

    return minSum;
};

console.log(minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]])); // 13
console.log(minFallingPathSum([[-19, 57],[-40, 5]])); // -59


