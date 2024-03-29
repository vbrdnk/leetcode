/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function(arr) {
    if (!arr.length || arr.length === 1) return [-1];
    let max = -1;


    for (let i = arr.length - 1; i >= 0; i--) {
        const temp = arr[i];
        arr[i] = max;
        max = Math.max(temp, max);
    }

    return arr;
};

console.log(replaceElements([17,18,5,4,6,1]));
