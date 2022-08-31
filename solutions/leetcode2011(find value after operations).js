/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = function(operations) {
  return operations.reduce((acc, operation) => {
    if (operation === '++X' || operation === 'X++') {
      acc++;
    }

    if (operation === 'X--' || operation === '--X') {
      acc--;
    }

    return acc;
  }, 0);
};
