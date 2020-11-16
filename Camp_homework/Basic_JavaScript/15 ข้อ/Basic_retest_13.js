function minMaxDiff() {
    let number = prompt('Enter number :...')
    let max = Number(number);
    let min = Number(number);
    while (number !== "stop") {
        if (Number(number) > max) {
            max = Number(number);
        }
        if (Number(number) < min) {
            min = Number(number);
        }
        number = prompt('Enter number :...')
    }
    console.log(max);
    console.log(min);
    console.log(max-min);
}