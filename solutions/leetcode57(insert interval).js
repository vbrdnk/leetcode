/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function(intervals, newInterval) {
    const [newStart, newEnd] = newInterval;
    let idx = 0, n = intervals.length;
    const ans = [];

    // add all intervals before newInterval
    while (idx < n && newStart > intervals[idx][0]) {
        ans.push(intervals[idx]);
        idx++;
    }

    // add newInterval
    let interval = [];

    // if no overlap just add interval
    if (!ans.length || ans[ans.length - 1][1] < newStart) {
        ans.push(newInterval);
    } else {
        // if there is overlap merge it with previous interval
        interval = ans.pop();
        interval[1] = Math.max(interval[1], newEnd);
        ans.push(interval);
    }

    // add all other intervals and merge them if needed
    while (idx < n) {
        interval = intervals[idx];
        idx++;

        const [start, end] = interval;

        if (ans[ans.length - 1][1] < start) {
            ans.push(interval);
        } else {
            // if there is overlap merge it with previous interval
            interval = ans.pop();
            interval[1] = Math.max(interval[1], end);
            ans.push(interval);
        }
    }


    return ans;
};
