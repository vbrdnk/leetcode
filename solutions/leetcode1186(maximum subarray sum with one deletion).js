/**
 * @param {number[]} arr
 * @return {number}
 */
const maximumSum = function(arr) {
    const len = arr.length;
    let withDeletion = 0;
    let withoutDeletion = arr[0];
    let max = arr[0];

    for (let i = 1; i < len; i++) {
       withDeletion = Math.max(withDeletion + arr[i], withoutDeletion);
       withoutDeletion = Math.max(withoutDeletion + arr[i], arr[i]);
       max = Math.max(max, Math.max(withoutDeletion, withDeletion));
    }

    return max;
};

// console.log(maximumSum([1, -2, 0, 3])); // 4
// console.log(maximumSum([1, -2, -2, 3])); // 3
console.log(maximumSum([-1, -1, -1, -1])); // -1
