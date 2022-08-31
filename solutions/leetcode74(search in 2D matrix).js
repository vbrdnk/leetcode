/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
  let row = matrix.length;
  let cols = matrix[0].length;
  let left = 0;
  let right = row * cols - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    const midVal = matrix[Math.floor(mid / cols)][mid % cols];

    if (midVal === target) {
      return true;
    }

    if (target < midVal) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};


console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3));
