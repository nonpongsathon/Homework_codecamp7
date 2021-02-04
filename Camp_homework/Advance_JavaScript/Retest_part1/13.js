function findSum() {
    let array = new Array()
    for (let i = 1; i < 3; i++) {
        let n = +prompt('Enter 2 number :..')
        array.push(n);
    }
    console.log(array);
    let combine = array.join('');
    let split = combine.split('');
    console.log(split);
    let sum = 0;
    for (let item of split) {
        sum = sum + Number(item);
    }
    console.log(sum);

}