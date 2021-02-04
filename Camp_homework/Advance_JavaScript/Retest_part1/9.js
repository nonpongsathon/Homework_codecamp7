let n = +prompt('Enter the factorial :...');
let result = 1;
for (let number = 1; number < n + 1; number++) {
    result = result * number;
}
console.log(result);