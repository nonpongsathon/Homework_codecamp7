function draw(n) {
    let star = '*'
    let dash = '-'
    for (let row = 1; row < n+1; row++) {
        let value =''
        for (let count = n; count > 0; count--) {
            if (count < row) {
                value = value + dash
            }
            else {
                value = value + star
            }
        }
        console.log(value)
    }
}