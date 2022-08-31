/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
 const guessNumber = function(n) {
    return binarySearch(1, n);
};

const binarySearch = (low, high) => {
    const mid = low + ((high - low) / 2);
    
    const guessResult = guess(mid);
    
    switch(guessResult) {
        case - 1:
            return binarySearch(low, mid - 1);
        case 1: 
            return binarySearch(mid + 1, high);
        default: 
            return mid;
    } 
}