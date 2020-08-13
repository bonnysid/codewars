function sumIntervals(intervals) {

    function cross(firstInterval, secondInterval) {
        if (firstInterval[0] > secondInterval[1] || secondInterval[0] > firstInterval[1]) {
            return false;
        }
        return [Math.min(firstInterval[0], secondInterval[0]), Math.max(firstInterval[1], secondInterval[1])];
    }

    for (let index = 0; index < intervals.length; index++) {
        let repeat = true;
        while (repeat) {
            repeat = false;
            for (let i = index + 1, len = intervals.length; i < len; i++) {
                let crossed = cross(intervals[index], intervals[i]);
                if (crossed) {
                    intervals[index] = crossed;
                    intervals.splice(i, 1);
                    repeat = true;
                    break;
                }
            }
        }
    }
    return intervals.reduce((sum, interval) => sum + interval[1] - interval[0], 0);
}

export default sumIntervals;