/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = function(arr) {
    if (!arr.length) return false;

    const len = arr.length;
    let i = 0;

    // walk up
    while (i + 1 < len && arr[i] < arr[i + 1]) {
        i++;
    }

    console.log(i);

    if (i === 0 || i === len - 1) {
        return false;
    }

    // walk down
    while (i + 1 < len && arr[i] > arr[i + 1]) {
        i++;
    }

    return i === len - 1;
};
