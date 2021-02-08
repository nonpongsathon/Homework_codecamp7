function maxPossibleNumber(number) {
  let arr = String(number).split("");
  let dotIndex = arr.findIndex((item) => item == ".");
  arr.sort((a, b) => {
    return b - a;
  });
  if (arr.includes(".")) {
    arr.pop();
    let result = arr.join("");
    return Number(result) / 10 ** (result.length - dotIndex);
  } else {
    return Number(arr.join(""));
  }
}
