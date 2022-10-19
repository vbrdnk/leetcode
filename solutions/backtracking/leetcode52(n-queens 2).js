/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = function(n) {
    function backtrack(row, diagonals, antidiagonals, cols) {
        // base case
        if (row === n) {
            return 1;
        }

        let solutions = 0;

        for (let col = 0; col < n; col++) {
            let currDiagonal = row - col;
            let currAntiDiagonal= row + col;

            // if the queen is not placeable
            if (cols.has(col) || diagonals.has(currDiagonal) || antidiagonals.has(currAntiDiagonal)) {
                continue;
            }

            // add queen to the board
            cols.add(col);
            diagonals.add(currDiagonal);
            antidiagonals.add(currAntiDiagonal);

            // move on the next row with the updated board state
            solutions += backtrack(row + 1, diagonals, antidiagonals, cols);

            // remove the queen from the board after explored all valid paths
            cols.delete(col);
            diagonals.delete(currDiagonal);
            antidiagonals.delete(currAntiDiagonal);
        }

        return solutions;
    }

    return backtrack(0, new Set(), new Set(), new Set());
};

console.log(totalNQueens(4)); // 2;

