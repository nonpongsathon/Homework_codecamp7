function draw(n) {
    let star = '*'
    let dash = '-'
    let i = -1
    let length = n + n - 1
    let round = n


    for (let row = 1; row < round + 1; row++) {

        let value = ''

        for (let count = 1; count < length + 1; count++) {
            if (row > count || length - count <= i ) {
                value = value + dash;
            }
            else {
                value = value + star;
            }
        }
        console.log(value);
        i = i + 1
    }
}