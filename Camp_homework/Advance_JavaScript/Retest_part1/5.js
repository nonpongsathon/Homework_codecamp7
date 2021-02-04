let sum = 0;
let number = 1;
let n = +prompt('Enter the amount of number :');
for (let count = 1; count < n + 1; count++) {
    sum = sum + count * count
}
console.log(sum)