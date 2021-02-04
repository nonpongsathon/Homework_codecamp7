let n = +prompt('Enter number order :')
let sum = 0;
let number = 1;
let array = new Array()
while (number != n + 1) {
    let count = 0;
    for (let divider = 1; divider < n + 1; divider++) {
        if (number % divider == 0) {
            count++;
        }
    }
    if (count == 2) {
        let prime = number * (-1)
        array.push(prime)
    } else {
        array.push(number)
    }

    number++;
}
console.log(array);
for (let i of array) {
    sum = sum + i;
}
console.log(sum);