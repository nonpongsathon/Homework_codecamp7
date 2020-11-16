function draw(n) {
    let show =''
    for (let number = 1; number < n+1; number++) {
        show = show + String(number)
    }
    for (let row = 1; row < n+1; row++) {
    console.log(show)
    }
}