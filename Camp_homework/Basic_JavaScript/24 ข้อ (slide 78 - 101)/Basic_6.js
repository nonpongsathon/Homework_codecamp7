function draw(n) {
    let i = 0
   for (let row = 1; row < n+1; row++) {
     let number = ''
    for (let count = 1; count < n+1; count++) {
        i = i + 1
        number = number + String(i)
    }
    console.log(number)
}
}