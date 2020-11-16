function draw(n) {
    let i = 1
    for (let row = 1; row < n + 1; row++) {
        let number = ''
        for (let count = 1; count < n + 1; count++) {
            number = number + String(i)
        }
        console.log(number)
        i = i + 1
    }
}