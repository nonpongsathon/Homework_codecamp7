function draw(n) {
    let i = n
    for (let row = n; row > 0 ; row--) {
        let number = ''
        for (let count = n; count > 0; count--) {
            number = number + String(i)
        }
        console.log(number)
        i = i - 1;
    }
}