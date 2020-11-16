function draw(n) {
    let star = '*'
    let dash = '-'
    let up = n
    let down = n - 1

    // ขาดาวเพิ่มขึ้น
    for (let row = 1; row < up+1; row++) {
        let valueUp =''
        for (let count = up; count > 0; count--) {
            if (count > row) {
                valueUp = valueUp + dash
            }
            else {
                valueUp = valueUp + star
            }
        }
        console.log(valueUp)
    }

    // ขาดาวลดลง
    for (let row = down; row > 0; row--) {
        let valueDown =''
        for (let count = n; count > 0; count--) {
            if (count > row) {
                valueDown = valueDown + dash
            }
            else {
                valueDown = valueDown + star
            }
        }
        console.log(valueDown)
    }
}