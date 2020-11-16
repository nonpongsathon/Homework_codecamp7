function addition() {
    let sum = 0;
    for (let number = 163; number < 816; number += 4) {
        sum = sum + number;
    }
    alert(sum);
}