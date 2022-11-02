/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
const canAttendMeetings = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < intervals.length; i++) {
        const currMeetingStart = intervals[i][0];
        const prevMeetingEnd = intervals[i - 1][1];

        if (currMeetingStart < prevMeetingEnd) return false;
    }

    return true;
};
