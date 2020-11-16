function mulSum() {
    let result = 0;
    let firstNumber = 0;
    let secondNumber = 1;
    for (let number = 1; number < 88; number++) {
        firstNumber += 1;
        secondNumber += 1;
        let multiple = firstNumber * secondNumber
        result = result + multiple
    }
    alert(result)
}