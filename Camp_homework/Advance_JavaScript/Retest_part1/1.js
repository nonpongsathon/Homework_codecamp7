let number = 1;
let array = new Array()
while (number != 101) {
    let count = ;
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