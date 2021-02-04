let n = +prompt('Enter the amount of prime number :')
let number = 1;
let array = new Array()
while (true) {
    let count = 0;
    for (let divider = 1; divider < number + 1; divider++) {
        if (number % divider == 0) {
            count++;
        }
    }
    if (count == 2) {
        array.push(number)
        if (array.length == n) {
            break;
        }
    }
    number++;
}
console.log(array)