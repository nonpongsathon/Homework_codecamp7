function draw(n) {
    let star = '*'
    let dash = '-'
    for (let row = 1; row < n+1; row++) {
        let value = ''
        for (let count =1; count < n+1; count++) {
            if (count <= row) {
                value = value + star
            }
            else {
                value = value + dash
            }
        }
        console.log(value)
    }
}