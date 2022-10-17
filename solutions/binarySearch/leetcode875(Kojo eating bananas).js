/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function(piles, h) {
    function check(bananasPerHour) {
        let hours = 0;

        for (const bananas of piles) {
            hours += Math.ceil(bananas / bananasPerHour);
        }

        return hours <= h;
    }

    let left = 1;
    let right = Math.max(...piles);

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (check(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
