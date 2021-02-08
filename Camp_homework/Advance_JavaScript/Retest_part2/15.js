function calculateInterest(money, years) {
  const interest = 0.025;
  let result = money;
  for (let i = 0; i < years; i++) {
    result += result * interest;
  }

  return result;
}
