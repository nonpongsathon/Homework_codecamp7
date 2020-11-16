function draw(n) {
    let star = '*'
    let dash = '-'
    let i = 0
    let j = 0
    let length = n + n - 1
    let round = n

    // ขาดาวเพิ่ม
    for (let row = 1; row < round + 1; row++) {

        let value = ''

        for (let count = 1; count < length + 1; count++) {
            if (count < n || count - n > i) {
                value = value + dash;
            }
            else {
                value = value + star;
            }
        }
        console.log(value);
        n = n - 1
        i = i + 2
    }

    // ขาดาวลด

    for (let row = 2; row < round + 1; row++) {

        let value = ''

        for (let count = 1; count < length + 1; count++) {
            if (row > count || length - count <= j ) {
                value = value + dash;
            }
            else {
                value = value + star;
            }
        }
        console.log(value);
        j = j + 1
    }
}
