function solution(input, marks) {
    return input.split('\n').map(str => {
        let res = str;
        marks.forEach(mark => {
            if (str.indexOf(mark) !== -1) res = str.slice(0, str.indexOf(mark)).trim();
        });
        return res;
    }).filter(str => str !== '').join('\n');
}

export default solution;