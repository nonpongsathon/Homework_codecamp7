let array = [];
let n;
let hcf = 1;
for (let i = 0; i < 3; i++) {
    n = +prompt('Enter number : ');
    array[i] = n;
}
array.sort((a, b) => {
    return (a > b) ? 1 : (a < b) ? -1 : 0;
})
for (let divider = 1; divider < array[2] + 1; divider++) {
    if ((array[0] % divider == 0) && (array[1] % divider == 0) && (array[2] % divider == 0)) {
        hcf = divider;
    }
}
console.log(array);
console.log(hcf);

