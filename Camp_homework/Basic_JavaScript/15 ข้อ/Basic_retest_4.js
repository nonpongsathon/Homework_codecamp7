function fibo() {
    let n = Number(prompt("Enter the number of sequence"))
    let firstNumber = 0;
    let secondNumber = 1;
    let number;

    for (let count = 1; count < n + 1; count++) {
        if (count === 1) {
            number = firstNumber
        }
        else if (count === 2) {
            number = secondNumber
        } else {

            number = firstNumber + secondNumber
            firstNumber = secondNumber
            secondNumber = number
        }
    }
    alert(number)
}