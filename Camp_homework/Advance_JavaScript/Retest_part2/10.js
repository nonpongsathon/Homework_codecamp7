function squareRoot(number) {
  for (let i = number; i > 1; i--) {
    if (number / i === i) {
      return i;
    }

    if (number % (i * i) === 0) {
      return `${i} root ${number / (i * i)}`;
    }

    if (i === 2) {
      return `root ${number}`;
    }
  }
}
