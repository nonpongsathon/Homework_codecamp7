function maxPairSum(array) {
  let maxValue = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sum = array[i] + array[j];
      if (sum > maxValue) {
        maxValue = sum;
      }
    }
  }
  return maxValue;
}
