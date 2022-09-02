/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function(heights) {
    const count = new Int8Array(heights.length);
    for (let i = 0; i < heights.length; i++) {
        count[heights[i]]++;
    }

    let ret = 0;
    let idx = 0;

    for (let i = 0; i < heights.length; i++) {
        while (count[i]--) heights[idx++] !== i && ret++;
    }
    return ret;
};

console.log(heightChecker([1,1,4,2,1,3]));
