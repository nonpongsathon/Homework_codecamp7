function reorder() {
    let array = new Array();
    let n = 1;
    for (let i = 1; i < 6; i++) {
        n = +prompt('Enter 5 numbers to reorder :... ');
        array.push(n);
    }
    console.log('The number you entered are ' + array);

    let length = array.length;
    let sort = prompt('True for ascending / False for descending');
    let array2 = new Array();
    if (sort == 'true') {
        for (let count = 1; count < length + 1; count++) {
            let min = Infinity;
            for (let j of array) {
                if (min > j) {
                    min = j;
                }
            }
            array2.push(min);
            array.splice(array.findIndex(function (item) {
                return item == min;
            }), 1);
        }
    } else {
        for (let count = 1; count < length + 1; count++) {
            let max = -Infinity;
            for (let z of array) {
                if (max < z) {
                    max = z;
                }
            }
            array2.push(max);
            array.splice(array.findIndex(function (item) {
                return item == max;
            }), 1);
        }
    }
    console.log(array2);
}