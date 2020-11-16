function plusMinus() {
    let result = 0;
    for (let number = 1; number < 18955; number++) {
        if (number % 2 == 0) {
            result = result - number;
        } else {
            result = result + number;
        }
    }
    alert(result)
}