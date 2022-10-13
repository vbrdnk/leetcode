/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
// brute force solution
const solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
        for (let i = 0; i < n; i++) {
            if (isCelebrity(i, n)) {
                return i;
            }
        }

        return -1;
    };

    function isCelebrity(i, n) {
        for (let j = 0; j < n; j++) {
            if (i === j) continue;

            if (knows(i, j) || !knows(j, i)) {
                return false;
            }
        }

        return true;
    }
};

/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
const solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
        let candidate = 0;

        for (let i = 0; i < n; i++) {
            if (knows(candidate, i)) {
                candidate = i;
            }
        }

        if (isCelebrity(candidate, n)) {
            return candidate;
        }

        return -1;
    };

    function isCelebrity(i, n) {
        for (let j = 0; j < n; j++) {
            if (i === j) continue;

            if (knows(i, j) || !knows(j, i)) {
                return false;
            }
        }

        return true;
    }
};
