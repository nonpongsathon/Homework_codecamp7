function tripleMulSum() {
    let result = 0;
    let firstNumber = 0;
    let secondNumber = 1;
    let thirdNumber = 2;
    for (let number = 1; number < 88; number++) {
        firstNumber += 1;
        secondNumber += 1;
        thirdNumber += 1;
        let multiple = firstNumber * secondNumber * thirdNumber;
        result = result + multiple;
    }
    alert(result);
}