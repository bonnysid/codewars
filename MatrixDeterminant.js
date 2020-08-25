function determinant(m) {
    let res = 0;
    if (m.length === 1) return m[0][0];
    else if (m.length > 2) {
        m[0].forEach((num, i) => {
            const newMatrix = m.slice(1).map((line, j) => line.filter((num, k) => k !== i));
            res = i % 2 === 0 ? res += num * determinant(newMatrix) : res -= num * determinant(newMatrix);
        });
        return res;
    } else return m[0][0] * m[1][1] - m[0][1] * m[1][0];
}

export default determinant;