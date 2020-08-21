function rectangleRotation(a, b) {
    const st = Math.SQRT2;
    const res = (Math.floor(a / st + 1) * Math.floor(b / st + 1)) + (Math.floor(a / st) * Math.floor(b / st));
    return res % 2 === 1 ? res : res - 1;
}

export default rectangleRotation;