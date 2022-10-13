/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    let ans = 0;
    const seen = Array.from(Array(rows), () => new Array(cols).fill(false));

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            ans = Math.max(ans, dfs(row, col));
        }
    }

    function dfs(row, col) {
        if (row < 0 || row >= rows || col < 0 || col >= cols || seen[row][col] || grid[row][col] === 0) return 0;

        seen[row][col] = true;
        return (1 + dfs(row + 1, col) + dfs(row - 1, col) + dfs(row, col + 1) + dfs(row, col - 1));
    }

    return ans;
};

console.log(maxAreaOfIsland(
    [
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    ]));
