function calculateArea(recs) {
    const X1 = 0;
    const Y1 = 1;
    const X2 = 2;
    const Y2 = 3;
    const ASC = (pos) => (a, b) => a[pos] - b[pos];
    const ASCX = (a, b) => a - b;
    const positions = new Set();
    let rectsInProcess = [];
    let area = 0;
    let start = 0;
    recs = recs.sort(ASC(X1));

    function getHeight(recs) {
        let height = 0
        recs.sort(ASC(Y1))
            .reduce((previous, current) => {
                if (previous < current[Y2]) {
                    height += current[Y2] - Math.max(current[Y1], previous);
                    return current[Y2];
                }
                return previous;
            }, 0);
        return height;
    }

    recs.forEach(rect => {
        positions.add(rect[X1]);
        positions.add(rect[X2]);
    });

    [...positions].sort(ASCX).map((position, i, array) => {
        const prevPos = array[i - 1] || 0;
        const width = position - prevPos;
        const height = getHeight(rectsInProcess);

        area += width * height;
        rectsInProcess = rectsInProcess.filter(rect => rect[X2] > position);
        for (let i = start; i < recs.length && recs[i][X1] === position; start = ++i) rectsInProcess.push(recs[i]);
    });

    return area;
}

export default calculateArea;