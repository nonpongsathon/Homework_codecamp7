let array = [];
let n;
let hcf = 1;
function findLcm() {
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
    console.log('The Highest common factor is ' + hcf);
    // Finish finding HCF

    // Start finding LCM
    let array2 = [];
    let result = 1;
    for (let j = 0; j < array.length; j++) {
        array2[j] = array[j] / hcf;
    }
    console.log(array2)
    for (let x of array2) {
        result = result * x;
    }
    console.log('The Least common multiple is ' + (result * hcf));
}

