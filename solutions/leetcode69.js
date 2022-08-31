/**
 * @param {number} x
 * @return {number}
 */
 const mySqrt = function(x) {
    if (x === 0) {
        return 0;
    }
    
    let left = 1, right = x;
    
    while (true) {
        const mid = Math.round(left + (right - left) / 2);
        if (mid > x / mid) {
            right = mid - 1;
        } else {
            if (mid + 1 > x / (mid + 1))
                return Math.floor(mid);
            left = mid + 1;
        }
    }
};

console.log(mySqrt(8));
console.log(mySqrt(4));
