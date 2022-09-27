/**
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = function(s) {
    let lastOccurrences = new Array(26);

    for (let i = 0; i < s.length; i++) {
        lastOccurrences[s.charCodeAt(i) - 97] = i;
    }
    
    let maxPartitionLength = 0;
    let prevPartitionEnd = -1;

    let result = [];

    for (let i = 0; i < s.length; i++) {
        maxPartitionLength = Math.max(maxPartitionLength, lastOccurrences[s.charCodeAt(i) - 97]);
        if (i === maxPartitionLength) {
            result.push(maxPartitionLength - prevPartitionEnd);
            prevPartitionEnd = maxPartitionLength;
        }
    }

    return result;
};
