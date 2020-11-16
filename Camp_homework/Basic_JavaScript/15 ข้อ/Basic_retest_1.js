function lowestFraction() {
    let a = Number(prompt("Enter first number"))
    let b = Number(prompt("Enter second number"))
    let divider = 1
    if (a > b) {
        for (let number = 1; number < a + 1; number++) {
            if (a % number == 0 && b % number == 0) {
                if (number > divider) {
                    divider = number
                }
            }
        }
    }
    else {
        for (let number = 1; number < b + 1; number++) {
            if (a % number == 0 && b % number == 0) {
                if (number > divider) {
                    divider = number
                }
            }
        }
    }
    alert(`${a / divider}/${b / divider}`)
}