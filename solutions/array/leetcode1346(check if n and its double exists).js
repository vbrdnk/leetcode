/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function(arr) {
    if (!arr.length) return false;

    const hashMap = new Set();

    for (let num of arr) {
        if (hashMap.has(num / 2) || hashMap.has(num * 2)) {
            return true;
        }

        hashMap.add(num)
    }

    return false;
}

console.log(checkIfExist([10,2,5,3]));
