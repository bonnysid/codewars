function listPosition(word) {
    if (word.length < 2) return 1;
    const values = [];
    word.split('').sort().forEach((letter, i, arr) => {
        if (i === arr.lastIndexOf(letter)) 
            values.push({
                "letter" : letter,
                "value" : arr.lastIndexOf(letter) + 1 - arr.indexOf(letter)
            });
    });

    let start = 0;
    let index = 0;
    
    while(word[0] !== values[index].letter){
        start += fact(word.length - 1) / values.reduce((total, num, i) => total * fact(i === 0 ? num.value - 1 : num.value), 1);
        index++;
    }
    const res = word.split('').reduce((total, letter, i) => {
        values.forEach(num => {
            if (num.letter === letter) --num.value;
        })
        console.log((fact(word.length - i - 1) / values.reduce((total, num) => total * fact(num.value), 1)));
        return total + (fact(word.length - i - 1) / values.reduce((total, num) => total * fact(num.value), 1));
    }, start);

    return res;
}

function fact(x) {
    let res = 1;
    for ( let i = 2; i <= x; i++) res *= i;
    return res;
}

console.log(listPosition("QUESTION"));
  