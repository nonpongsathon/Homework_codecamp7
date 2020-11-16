function draw(n) {
    let star = ''
    for (column = 0; column < n; column++) {
        star = star + '*'
    }
    for (row = 0; row < n; row++) {
        console.log(star)
    }
}