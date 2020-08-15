function sumStrings(a, b) {
    const first = a.replace(/^0*/g, '').split('').reverse();
    const second = b.replace(/^0*/g, '').split('').reverse();
    let res = [];
    let plus = 0;

    function getZero(num) {
        return num === undefined ? 0 : +num;
    }

    for (let i = 0; i < first.length || i < second.length; i++) {
        res[i] = getZero(first[i]) + getZero(second[i]) + plus;
        if (res[i] >= 10) {
            plus = 1;
            res[i] = res[i] % 10;
        } else plus = 0;
    }
    res[res.length] = plus === 0 ? '' : 1;
    console.log(res);
    return res.reverse().join('');
}

export default sumStrings;