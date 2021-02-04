let n = +prompt('Enter the amount of prime number :')
let number = 1;
let array = new Array()
while (number != n + 1) {
    let count = 0;
    for (let divider = 1; divider < number + 1; divider++) {
        if (number % divider == 0) {
            count++;
        }
    }
    if (count == 2) {
        array.push(number)
    }
    number++;
}
console.log(array)