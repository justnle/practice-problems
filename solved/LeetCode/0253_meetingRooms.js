/*
LeetCode #253

Given an array of meeting time intervals intervals where
intervals[i] = [start, end] return the minimum number of
conference rooms required.
*/

const minMeetingRooms = (intervals) => {
    const sortedRooms = intervals.sort((a, b) => {
        return a[0] - b[0];
    });
    let endTimes = [sortedRooms[0][1]];
    let rooms = 1;

    for (let i = 1; i < sortedRooms.length; ++i) {
        endTimes = endTimes.sort((a, b) => {
            return a - b;
        });
        const [start, end] = [...intervals[i]];

        if (start < endTimes[0]) {
            endTimes.push(end);
            ++rooms;
        } else {
            endTimes.shift();
            endTimes.push(end);
        }
    }
    return rooms;
};

// 88ms and 40.8mb
// beats 41.15% of submissions

minMeetingRooms([0, 30], [5, 10], [15, 20]); // 2 rooms
