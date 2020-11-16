function tripleMulSumOdd() {
    let result = 0;
    let firstNumber = -1;
    let secondNumber;
    let thirdNumber;
    for (let number = 1; number < 156; number += 2) {
        firstNumber += 2;
        secondNumber = firstNumber + 2;
        thirdNumber = secondNumber + 2;
        let multiple = firstNumber * secondNumber * thirdNumber;
        result = result + multiple;
    }
    alert(result);
}