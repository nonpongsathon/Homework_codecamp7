function firstThreeMin() {
    let number = prompt("Enter the number : ...")
    let min1 = Infinity;
    let min2 = Infinity;
    let min3 = Infinity;
    while (number !== "stop") {
        if ((Number(number) < Number(min1)) && (Number(number) < Number(min2)) && (Number(number) < Number(min3))) {
            min3 = Number(min2);
            min2 = Number(min1);
            min1 = Number(number);
        }
        if ((Number(number) > Number(min1)) && (Number(number) < Number(min2)) && (Number(number) < Number(min3))) {
            min3 = Number(min2);
            min2 = Number(number);
        }
        if ((Number(number) > Number(min1)) && (Number(number) > Number(min2)) && (Number(number) < Number(min3))) {
            min3 = Number(number);
        }
        
        number = prompt("Enter the number : ...");
    }
    console.log(min1);
    console.log(min2);
    console.log(min3);
}