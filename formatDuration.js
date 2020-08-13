function formatDuration(seconds) {
    if (seconds === 0) return 'now';

    const sec = getStr(Math.floor(seconds % 60), 'second');
    const min = getStr(Math.floor((seconds / 60) % 60), 'minute');
    const hour = getStr(Math.floor((seconds / 3600) % 24), 'hour');
    const day = getStr(Math.floor((seconds / (3600 * 24)) % 365), 'day');
    const year = getStr(Math.floor(seconds / (3600 * 24 * 365)), 'year');

    function getStr(num, name) {
        return num > 0 ? num > 1 ? `${num} ${name}s  ` : `${num} ${name}  ` : '';
    }

    return (year + day + hour + min + sec)
        .split('  ')
        .filter(time => time !== '')
        .map((time, i, arr) => i !== arr.length - 2 ? i !== arr.length - 1 ? time + "," : time : time + " and")
        .join(' ');
}

export default formatDuration;