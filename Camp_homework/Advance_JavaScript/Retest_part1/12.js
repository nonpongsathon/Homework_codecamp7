function multiple() {
    let array = new Array();
    for (let number = 1; number < 1000; number++) {
        if (number % 3 == 0 || number % 5 == 0) {
            array.push(number);
        }
    }
    console.log(array);


    let sum = 0;
    for (let n of array) {
        sum = sum + n;
    }
    console.log(sum);
}