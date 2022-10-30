/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
const canReach = function(arr, start) {
    const queue = [start];

    function isValid(position) {
        return position >= 0 && position <= arr.length;
    }

    while (queue.length) {
        const currPosition = queue.shift();
        arr[currPosition] = -arr[currPosition];

        if (arr[currPosition] === 0) {
            return true;
        }

        const possibleDirections = [currPosition + arr[currPosition], currPosition - arr[currPosition]];

        for (const dir of possibleDirections) {
            if (isValid(dir) && arr[dir] >= 0) {
                queue.push(dir);
            }
        }
    }

    return false;
};

console.log(canReach([4,2,3,0,3,1,2], 5)); // true;
console.log(canReach([3,0,2,1,2], 2)); // false;
console.log(canReach([0], 0)); // true;

