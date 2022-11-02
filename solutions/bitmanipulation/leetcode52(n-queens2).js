/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = function(n) {
    let backtrack = (row, diagonals, antiDiagonals, cols) => {
        // Base case - N queens have been placed
        if (row == n) {
            return 1;
        }

        let solutions = 0;
        for (let col = 0 ; col < n; col++) {
            let currDiagonal = 1 << (row - col + n); // add n to avoid going negative
            let currAntiDiagonal = 1 << (row + col);
            let currCol = 1 << col;

            // If the queen is not placeable
            if (cols & currCol ||
                diagonals & currDiagonal ||
                antiDiagonals & currAntiDiagonal) {
                continue;
            }

            // "Add" the queen to the board
            cols ^= currCol;
            diagonals ^= currDiagonal;
            antiDiagonals ^= currAntiDiagonal;

            // Move on to the next row with the updated board state
            solutions += backtrack(row + 1, diagonals, antiDiagonals, cols);

            // "Remove" the queen from the board since we have already
            // explored all valid paths using the above function call
            cols ^= currCol;
            diagonals ^= currDiagonal;
            antiDiagonals ^= currAntiDiagonal;
        }

        return solutions;
    }

    return backtrack(0, 0, 0, 0);
};
