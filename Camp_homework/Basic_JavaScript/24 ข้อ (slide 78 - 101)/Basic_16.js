function draw(n) {
    let number = 1
    let dash = '-'
    let up = n
    let down = n - 1

    // ขาเลขเพิ่มขึ้น
    for (let row = 1; row < up+1; row++) {
        let valueUp =''
        for (let count = 1; count < up+1; count++) {
            if (count > row) {
                valueUp = valueUp + dash
            }
            else {
                valueUp = valueUp + number
            }
        }
        console.log(valueUp)
        number += 1
    }

    // ขาเลขลดลง
    number -= 2
    for (let row = down; row > 0; row--) {
        let valueDown =''
        for (let count = 1; count < n+1; count++) {
            if (count > row) {
                valueDown = valueDown + dash
            }
            else {
                valueDown = valueDown + number
            }
        }
        console.log(valueDown)
        number -= 1
    }
}