function min() {
    let number = prompt("Enter the number : ...")
    let min = number;
    while (number !== "stop") {
        if (Number(number) < Number(min)) {
            min = Number(number);
        }
        number = prompt("Enter the number : ...")
    }
    alert(min)
}