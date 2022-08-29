/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = function(arr) {
    let res = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let total = i * (n - i) + (n - i);
        res += Math.ceil(total / 2) * arr[i];

    }

    return res;
};

const sumOddLengthSubarrays2 = function(arr) {
    let total=0

    for(let i = 0; i < arr.length; i++){
        const endsWith = i + 1;
        const beginsWith = arr.length - i;
        const totalOccurrences = endsWith * beginsWith;
        total += (totalOccurrences - Math.floor(totalOccurrences / 2)) * arr[i];  // totalOccurrences - evenOccurrences = oddOccurrences
    }

    return total;
};
console.log(sumOddLengthSubarrays([1,4,2,5,3]));
console.log(sumOddLengthSubarrays2([1,4,2,5,3]));

