function digit() {
    let sum = 0;
    for (let number = 1; number < 4129980; number++) {
        sum = sum + String(number).length;
    }
    console.log(sum);
}