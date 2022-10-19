/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function(board, word) {
    let valid = (row, col) => {
        return 0 <= row && row < m && 0 <= col && col < n;
    }

    let backtrack = (row, col, i, seen) => {
        if (i == word.length) {
            return true;
        }

        for (const [dx, dy] of directions) {
            let nextRow = row + dy, nextCol = col + dx;
            if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                if (board[nextRow][nextCol] == word[i]) {
                    seen[nextRow][nextCol] = true;
                    if (backtrack(nextRow, nextCol, i + 1, seen)) {
                        return true;
                    }
                    seen[nextRow][nextCol] = false;
                }
            }
        }

        return false;
    }

    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let m = board.length;
    let n = board[0].length;

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            let seen = [];
            for (let i = 0; i < m; i++) {
                seen.push(new Array(n).fill(false));
            }

            seen[row][col] = true;
            if (board[row][col] == word[0] && backtrack(row, col, 1, seen)) {
                return true;
            }
        }
    }

    return false;
};
