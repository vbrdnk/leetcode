/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var leetcode1480RunningSum = function(nums) {
    const runningSum = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            runningSum.push(nums[0]);
            continue;
        }
        
        runningSum.push(nums[i] + runningSum[i - 1]);
    }
    
    return runningSum;
};

var runningSumInPlace = function(nums) {
    let prevValue = 0;

    return nums.map((num, i) => {
        const newNum = num + prevValue;
        prevValue = newNum;
        return newNum;
    });
};

console.log(leetcode1480RunningSum([1,2,3,4]));
