class Primes {
    static * stream() {
        for (let p = 2; p < p + 1; p++) {
            let flag = true;
            if (p % 2 === 0 && p !== 2) flag = false;
            else
                for (let i = 3; i < Math.round(Math.sqrt(p)) + 1; i += 2) {
                    if (p % i === 0) {
                        flag = false;
                        break;
                    }
                }
            if (flag) yield p;
        }
    }
}

export default Primes;