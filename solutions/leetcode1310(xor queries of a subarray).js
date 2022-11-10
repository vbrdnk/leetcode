/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
const xorQueries = function(arr, queries) {
    const result = [];

    for (const query of queries) {
        const [x, y] = query;
        let xorNum = 0;

        for (let i = x; i <= y; i++) {
            xorNum ^= arr[i];
        }

        result.push(xorNum);
    }

    return result;
};

console.log(xorQueries([1,3,4,8],[[0,1],[1,2],[0,3],[3,3]])); // [2, 7, 14, 8]
console.log(xorQueries([4,8,2,10],[[2,3],[1,3],[0,0],[0,3]])); // [8,0,4,4]
