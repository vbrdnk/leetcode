/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let count = 0;

    for (let boxType of boxTypes) {
        let [boxNum, unitsNum] = boxType;

        if (truckSize - boxNum >= 0) {
            truckSize -= boxNum;
            count += boxNum * unitsNum;
        } else {
            while (truckSize > 0) {
                count += unitsNum;
                truckSize -= 1;
            }

        }
    }

    return count;
};

console.log(maximumUnits([[1,3],[2,2],[3,1]], 4)); // 8
console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10)); // 91

