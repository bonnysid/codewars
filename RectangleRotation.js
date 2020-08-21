function rectangleRotation(a, b) {
    const halfFirstDots = (a / Math.sqrt(2)) / 2;
    const halfSecondDots = (b / Math.sqrt(2)) / 2;
    const firstRect = [Math.floor(halfFirstDots) * 2 + 1, Math.floor(halfSecondDots) * 2 + 1];
    const secondRect = [
        halfFirstDots - Math.floor(halfFirstDots) < 0.5 ? firstRect[0] - 1 : firstRect[0] + 1,
        halfSecondDots - Math.floor(halfSecondDots) < 0.5 ? firstRect[1] - 1 : firstRect[1] + 1
    ];

    return firstRect.reduce((total, num) => total * num, 1) + secondRect.reduce((total, num) => total * num, 1);
}

export default rectangleRotation;