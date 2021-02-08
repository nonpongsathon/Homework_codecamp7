function minPairSum(array) {
  let minValue = array[0] + array[1];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sum = array[i] + array[j];
      if (sum < minValue) {
        minValue = sum;
      }
    }
  }
  return minValue;
}
