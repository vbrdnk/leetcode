/**
 * @param {number} n
 * @return {number}
 */
 const climbStairs = function(n) {
    const arr = [];
    arr[1] = 1;
    arr[2] = 2;
    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
        console.log(arr[i]);
    }
    
    return arr[n];
};

console.log(climbStairs(45));