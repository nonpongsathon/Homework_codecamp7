function reverseNum() {
    let input = +prompt('Enter the number you want to reverse :...')
    if (input < 0) {
        input1 = input * (-1)
    }
    let strinput = String(input1)
    let output = strinput.split('').reverse().join('')
    if (input < 0) {
        output = '-' + output
    }
    return output

}