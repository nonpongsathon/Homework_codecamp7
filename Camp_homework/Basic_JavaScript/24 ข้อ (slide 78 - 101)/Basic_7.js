function draw(n) {
    let firstNumber = n*n
    for (let row = 1; row < n+1; row++) {
        let number = ''
        for (let count = 1; count < n+1; count++) {
            number = number + String(firstNumber)
            firstNumber -= 1
        }
        console.log(number)
    }
}