function removeZeros(array) {
    for (let i = 0; i < array.length; i++) {
        let wasSwap = false;
        for (let j = 0; j < array.length - 1; j++) {
            if ((array[j] === 0 || array[j] === '0') && (array[j + 1] !== 0 && array[j + 1] !== '0')) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }

    return array;
}

export default removeZeros;