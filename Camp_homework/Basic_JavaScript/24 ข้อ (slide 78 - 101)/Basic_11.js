function draw(n) {
    let dash = '-'
    let star = '*'
    for (let row = 1; row < n+1; row++) {
        let value = ''
        for (let count = 1; count < n+1; count++) {
            if (count == row) {
                value = value + dash
            }
            else {
            value = value + star
        }
        }
        console.log(value)
    }
}