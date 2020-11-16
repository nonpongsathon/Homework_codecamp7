function average() {
    let number = prompt("Enter the number :...");
    let sum = 0;
    let average = 0;
    let count = 1;
    while (number !== "stop") {
        sum = sum + Number(number);
        number = prompt("Enter the number :...");
        count++;
    }
    count -= 1;
    average = sum / count;
    console.log(average);
}