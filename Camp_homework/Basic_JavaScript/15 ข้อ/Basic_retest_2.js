function addition() {
    let number;
    let lastNumber = 2048;
    let sum = 0;
    for (number = 160; number < lastNumber + 1; number+=2) {
        sum = sum + number;
    }
    alert(sum);
}