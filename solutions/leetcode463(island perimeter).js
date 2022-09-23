/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function(grid) {
    if (!grid.length || !grid[0].length) return 0;
    let result = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                result += 4;


                // check if there is connected island on top
                if (i > 0 && grid[i - 1][j] === 1) result -= 2;

                // check if prev position in row is island
                if (j > 0 && grid[i][j - 1] === 1) result -= 2;
            }
        }
    }

    return result;
};

console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])); // 16
