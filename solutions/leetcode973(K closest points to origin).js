/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function(points, k) {
    const sorted = points.sort((a, b) => (a[0] * a[0] + a[1] * a[1]) -( b[0] * b[0] + b[1] * b[1]));
    return sorted.slice(0, k);
};

// console.log(kClosest([[1,3],[-2,2]], 1)); // [[-2, 2]]
console.log(kClosest([[1,3],[-2,2], [2, -2]], 1)); // [[-2, 2], [2, -2]]
