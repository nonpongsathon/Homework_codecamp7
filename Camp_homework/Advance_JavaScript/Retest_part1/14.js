function findSumFac() {
    let n = +prompt('Enter number of factorial : ...');
    let sumFac = 1;
    for (let i = 1; i < n + 1; i++) {
        sumFac = sumFac * i;
    }
    console.log(sumFac);
    let array = String(sumFac).split('');
    console.log(array)
    let sum = 0;
    for (let j of array) {
        sum = sum + Number(j);
    }
    console.log(sum);
}