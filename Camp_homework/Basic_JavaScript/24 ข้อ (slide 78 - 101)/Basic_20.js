function draw(n) {
    let number = 0
    let dash = '-'
    let up = n
    let down = n - 1

    // ขาเลขเพิ่มขึ้น
    for (let row = 1; row < up+1; row++) {
        let valueUp =''
        for (let count = up ;count > 0; count--) {
            if (count > row) {
                valueUp = valueUp + dash
            }
            else {
                number += 1
                valueUp = valueUp + String(number)
            }
        
        }
        console.log(valueUp)
    
    }

    // ขาเลขลดลง

    for (let row = down; row > 0; row--) {
        let valueDown =''
        
        for (let count = n; count > 0; count--) {
            
            if (count > row) {
                valueDown = valueDown + dash
            }
            else {
                number += 1
                valueDown = valueDown + String(number)
            }
        }
        console.log(valueDown)
    }
}