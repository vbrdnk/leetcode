/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const countGoodTriplets = function(arr, a, b, c) {
    let goodTripletsCount = 0;

    for (let i = 0; i < arr.length;i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) > a) continue;

            for (let k = j + 1; k < arr.length; k++) {
                if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                    goodTripletsCount++;
                }
            }
        }
    }

    return goodTripletsCount;
};

console.log(countGoodTriplets([3,0,1,1,9,7], 7, 2, 3)); // 4
console.log(countGoodTriplets([1,1,2,2,3], 0, 0, 1)); // 4

