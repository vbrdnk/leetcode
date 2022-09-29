/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = function(groupSizes) {
    if (!groupSizes.length) return [];

    const result = [];
    const map = new Map();

    for (let i = 0; i < groupSizes.length; i++) {
        const groupSize = groupSizes[i];

        if (!map.get(groupSize)) map.set(groupSize, []);
        map.get(groupSize).push(i);

        if (map.get(groupSize).length === groupSize) {
            result.push(map.get(groupSize));
            map.delete(groupSize);
        }
    }

    return result;

};

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3])); // [[5], [0, 1, 2], [3, 4,6]]
