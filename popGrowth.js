const nbYear = (initPop, percent, coming, goal) => {
    let runningTotal = initPop
    const prc = 1 + (percent / 100);
    let year = 0

    while (runningTotal <= goal) {
        runningTotal *= prc;
        runningTotal += coming;
        year++;
    }
    return year
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));