/**
 * @param {number[]} arr
 * @return {number}
 */
const minSetSize = function(arr) {
    const map = new Map();
    let count = 0;
    let len = arr.length;

    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const entries = [...map.entries()].sort((a, b) => b[1] - a[1]);

    while (len > arr.length / 2) {
        const biggestEntry = entries.shift();
        len -= biggestEntry[1];
        count++;
    }


    return count;
};

console.log(minSetSize([3,3,3,3,5,5,5,2,2,7])); // 2
console.log(minSetSize([7,7,7,7,7,7])); // 1
