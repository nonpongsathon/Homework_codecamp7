function reorder() {
    let array = new Array();
    let n = 1;
    for (let i = 1; i < 6; i++) {
        n = +prompt('Enter 5 numbers to reorder :... ');
        array.push(n);
    }
    console.log('The number you entered are ' + array);
    let sort = prompt('Input true for ascending / Input false for descending');
    if (sort == 'true') {
        array.sort(function (a, b) {
            return (a > b) ? 1 : (a < b) ? -1 : 0;
        })
    } else {
        array.sort(function (a, b) {
            return (a < b) ? 1 : (a > b) ? -1 : 0;
        })
    }
    console.log(array);
}